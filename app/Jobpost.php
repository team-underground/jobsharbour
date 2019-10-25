<?php

namespace App;

use App\Tag;
use Carbon\Carbon;
use App\Enums\JobType;
use App\Enums\UserType;
use App\Enums\CategoryType;
use Illuminate\Support\Str;
use App\Enums\JobStatusType;
use JamesMills\Uuid\HasUuidTrait;
use Illuminate\Database\Eloquent\Model;
use CyrildeWit\EloquentViewable\Viewable;
use CyrildeWit\EloquentViewable\Contracts\Viewable as ViewableContract;

class Jobpost extends Model implements ViewableContract
{
    use HasUuidTrait, Viewable;

    protected $guarded = [];

    protected $dates = ['job_published_at'];

    protected $appends = ['job_new', 'job_published_at_formatted', 'job_skills'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'meta_keywords' => 'array'
    ];

    public function attachTags($tags)
    {
        // detach all tags if we have earlier
        $this->tags()->detach();
        // attaching all the tags that is requested
        foreach ($tags as $key => $tag) {
            // dd($tag);
            $tagFound = Tag::where('name', 'like', '%' . $tag . '%')->first();
            if ($tagFound) {
                $this->tags()->attach($tagFound->id);
            } else {
                $this->tags()->create([
                    'name' => $tag
                ]);
            }
        }
    }

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
    public static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            $model->job_slug = Str::slug($model->job_title); // change the ToBeSluggiefied

            $latestSlug =
                static::whereRaw("job_slug = '$model->job_slug' or job_slug LIKE '$model->job_slug-%'")
                ->latest('id')
                ->value('job_slug');

            if ($latestSlug) {
                $pieces = explode('-', $latestSlug);

                $number = intval(end($pieces));

                $model->job_slug .= '-' . ($number + 1);
            }
        });

        // static::updating(function ($model) {
        //     $model->job_slug = Str::slug($model->job_title); // change the ToBeSluggiefied

        //     $latestSlug =
        //         static::whereRaw("(job_slug = '$model->job_slug' or job_slug LIKE '$model->job_slug-%') and id != '$model->id'")
        //         ->latest('id')
        //         ->value('job_slug');

        //     if ($latestSlug) {
        //         $pieces = explode('-', $latestSlug);

        //         $number = intval(end($pieces));

        //         $model->job_slug .= '-' . ($number + 1);
        //     }
        // });
    }
    // protected static function boot()
    // {
    //     parent::boot();

    //     static::addGlobalScope('role', function (Builder $builder) {
    //         if (auth()->check()) {
    //             if (auth()->user()->type == 'Employer') {
    //                 $builder->where('user_id', auth()->user()->id);
    //             }
    //         }
    //     });
    // }

    public function getJobTypeAttribute($value)
    {
        return JobType::getDescription($value);
    }

    public function getJobCategoryAttribute($value)
    {
        return CategoryType::getDescription($value);
    }

    public function getJobStatusAttribute($value)
    {
        return Str::title(JobStatusType::getDescription($value));
    }

    public function getJobSkillsAttribute()
    {
        return $this->tags->pluck('name')->toArray();
    }

    // public function getJobPublishedAtAttribute($value)
    // {
    //     return Carbon::parse($value)->format('d-m-Y');
    // }
    public function getJobStartingDateAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function getJobClosingDateAttribute($value)
    {
        return Carbon::parse($value)->format('d-m-Y');
    }

    public function getJobPublishedAtFormattedAttribute()
    {
        // return (Carbon::today() == $value) ? Carbon::parse($value)->diffForHumans() : Carbon::parse($value)->format('j M, Y');
        // Carbon::parse($value)->toFormattedDateString(); // Dec 19, 2015
        if ($this->job_published_at == null) {
            return 'Not published yet';
        }
        $created = new Carbon($this->job_published_at);
        $now = Carbon::now();

        if ($created->diff($now)->days <= 1) {
            $difference = $created->diffForHumans(null, null, true);
        } else if ($created->diff($now)->days < 2) {
            $difference = 'Yesterday';
        } else if (in_array($created->diff($now)->days, [3, 4, 5, 6, 7])) {
            $difference = $created->diff($now)->days . ' days ago';
        } else {
            $difference = $created->toFormattedDateString();
        }

        return $difference;
    }

    public function getJobNewAttribute()
    {
        $created = new Carbon($this->job_published_at);
        $now = Carbon::now();

        if (in_array($created->diff($now)->days, [0, 1, 2, 3, 4, 5])) {
            return 'yes';
        } else {
            return 'no';
        }
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function company()
    {
        return $this->belongsTo(Company::class);
    }

    public function tags()
    {
        return $this->morphToMany(Tag::class, 'taggable');
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where(function ($query) use ($search) {
                $query->where('job_title', 'like', '%' . $search . '%')
                    ->orWhere('job_salary', 'like', '%' . $search . '%')
                    ->orWhere('job_location', 'like', '%' . $search . '%')
                    ->orWhere('job_category', 'like', '%' . $search . '%');
            });
        })->when($filters['category'] ?? null, function ($query, $jobCategory) {
            $jobCategoryArray = explode(',', $jobCategory);

            $jobCategoryIds = collect($jobCategoryArray)->map(function ($j) {
                return CategoryType::getValue(Str::studly($j, ' '));
            });

            $query->whereIn('job_category', $jobCategoryIds);
        })->when($filters['jobtype'] ?? null, function ($query, $jobtype) {
            $jobtypeArray = explode(',', $jobtype);

            $jobtypeIds = collect($jobtypeArray)->map(function ($j) {
                return JobType::getValue(Str::studly($j, ' '));
            });

            $query->whereIn('job_type', $jobtypeIds);
        })->when($filters['salary'] ?? null, function ($query, $salary) {
            $salaryArray = explode(',', $salary);
            $query->whereIn('job_salary', $salaryArray);
        });
    }

    public function scopeIndustry($query, $industry)
    {
        $query->whereHas('company', function ($q) use ($industry) {
            $q->where('company_industry', '=', JobType::getKey($industry));
        });
    }

    public function scopeRole($query)
    {
        if (auth()->check()) {
            if (auth()->user()->type == 'Employer' || auth()->user()->type == 'Consultancy') {
                $query->where('user_id', auth()->user()->id);
            }
        }
    }

    public function scopeClosed($query, $booleanValue = true)
    {
        if ($booleanValue === false) {
            $query->whereDate('job_closing_date', '>=', Carbon::now()->format('Y-m-d'));
        } else {
            $query->whereDate('job_closing_date', '<', Carbon::now()->format('Y-m-d'));
        }
    }

    public function scopePublished($query)
    {
        $query->whereNotNull('job_published_at');
    }
}
