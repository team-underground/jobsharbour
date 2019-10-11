<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use JamesMills\Uuid\HasUuidTrait;
use App\Enums\IndustryType;
use Illuminate\Support\Str;

class Company extends Model
{
    use HasUuidTrait;

    protected $guarded = [];

    public function jobposts()
    {
        return $this->hasMany(Jobpost::class);
    }

    public function getCompanyIndustryAttribute($value)
    {
        return Str::title(IndustryType::getDescription($value));
    }
}
