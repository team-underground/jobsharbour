<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use JamesMills\Uuid\HasUuidTrait;
use App\Enums\CategoryType;
use App\Enums\JobType;
use App\Enums\JobStatusType;
use Illuminate\Support\Str;
use Carbon\Carbon;

class Jobpost extends Model
{
    use HasUuidTrait;

    protected $guarded = [];

    protected $dates = ['job_published_at'];

    public function getJobTypeAttribute($value)
    {
        return Str::title(JobType::getDescription($value));
    }

    public function getJobPositionAttribute($value)
    {
        return Str::title(CategoryType::getDescription($value));
    }

    public function getJobStatusAttribute($value)
    {
        return Str::title(JobStatusType::getDescription($value));
    }

    public function getJobPublishedAtAttribute($value)
    {
        // return (Carbon::today() == $value) ? Carbon::parse($value)->diffForHumans() : Carbon::parse($value)->format('j M, Y');
        return Carbon::parse($value)->toFormattedDateString(); // Dec 19, 2015
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
}
