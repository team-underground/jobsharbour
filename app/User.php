<?php

namespace App;

use App\Subscription;
use App\Enums\UserType;
use JamesMills\Uuid\HasUuidTrait;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;

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

    protected $appends = ['subscribed_to'];

    public function getTypeAttribute($value)
    {
        return UserType::getDescription($value);
    }

    public function getAllCompanies()
    {
        if ($this->isAdmin()) {
            return Company::all();
        }
        return $this->companies;
    }

    // public function subscription()
    // {
    //     return $this->hasOne(Subscription::class);
    // }

    public function companies()
    {
        return $this->hasMany(Company::class);
    }

    public function subscriptions()
    {
        return $this->hasMany(Subscription::class);
    }

    public function getSubscribedToAttribute()
    {
        return optional($this->subscriptions()->orderByDesc('created_at')->first())->package;
    }

    public function isAdmin()
    {
        return $this->type == (UserType::getInstance(UserType::Administrator))->key;
    }

    public function isEmployer()
    {
        return $this->type == (UserType::getInstance(UserType::Employer))->key;
    }

    public function isConsultancy()
    {
        return $this->type == (UserType::getInstance(UserType::Consultancy))->key;
    }

    public function scopeFilter($query, array $filters)
    {
        $query->when($filters['search'] ?? null, function ($query, $search) {
            $query->where('name', 'like', '%' . $search . '%')
                ->orWhere('email', 'like', '%' . $search . '%');
        });
    }
}
