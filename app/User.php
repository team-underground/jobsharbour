<?php

namespace App;

use App\Enums\UserType;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use JamesMills\Uuid\HasUuidTrait;

class User extends Authenticatable
{
    use Notifiable, HasUuidTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'uuid', 'name', 'email', 'password', 'phone', 'photo', 'type', 'provider_id',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function getTypeAttribute($value)
    {
        return UserType::getDescription($value);
    }

    public function companies()
    {
        return $this->hasMany(Company::class);
    }

    public function isAdmin()
    {
        return UserType::getKey($this->type) == 'Administrator';
    }

    public function isEmployer()
    {
        return UserType::getKey($this->type) == 'Employer';
    }

    public function isConsultancy()
    {
        return UserType::getKey($this->type) == 'Consultancy';
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        });
    }
}
