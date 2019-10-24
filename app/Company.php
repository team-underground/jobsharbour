<?php

namespace App;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use JamesMills\Uuid\HasUuidTrait;
use Illuminate\Support\Str;
use App\Enums\IndustryType;
use App\Enums\UserType;

class Company extends Model
{
    use HasUuidTrait;

    protected $guarded = [];

    protected $appends = ['company_logo_path'];

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

    public function jobposts()
    {
        return $this->hasMany(Jobpost::class);
    }

    public function getCompanyIndustryAttribute($value)
    {
        return Str::title(IndustryType::getDescription($value));
    }

    public function getCompanyLogoPathAttribute()
    {
        return $this->company_logo ? url('/') . '/storage/' . $this->company_logo : null;
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('company_name', 'like', '%' . $search . '%')
                ->orWhere('company_email', 'like', '%' . $search . '%');
        });
    }

    public function scopeRole($query)
    {
        if (auth()->check()) {
            if (auth()->user()->isEmployer() || auth()->user()->isConsultancy()) {
                $query->where('user_id', auth()->user()->id);
            }
        }
    }
}
