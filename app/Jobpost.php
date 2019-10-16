<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use JamesMills\Uuid\HasUuidTrait;
use App\Enums\JobStatusType;
use Illuminate\Support\Str;
use App\Enums\CategoryType;
use App\Enums\UserType;
use App\Enums\JobType;
use Carbon\Carbon;

class Jobpost extends Model
{
    use HasUuidTrait;

    protected $guarded = [];

    protected $dates = ['job_published_at'];

    protected $appends = ['job_new', 'job_published_at_formatted'];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'job_skills' => 'array',
    ];

    /**
     * The "booting" method of the model.
     *
     * @return void
     */
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

    public function getJobPositionAttribute($value)
    {
        return CategoryType::getDescription($value);
    }

    public function getJobStatusAttribute($value)
    {
        return Str::title(JobStatusType::getDescription($value));
    }

    public function getJobPublishedAtAttribute($value)
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

        $created = new Carbon($this->job_published_at);
        $now = Carbon::now();

        if ($created->diff($now)->days < 1) {
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

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('job_title', 'like', '%' . $search . '%')
                ->orWhere('job_salary', 'like', '%' . $search . '%')
                ->orWhere('job_location', 'like', '%' . $search . '%');
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
            if (auth()->user()->type == 'Employer') {
                $query->where('user_id', auth()->user()->id);
            }
        }
    }
}
