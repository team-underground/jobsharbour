<?php

namespace App\Providers;

use App\Jobpost;
use Illuminate\Auth\Events\Registered;
use Illuminate\Auth\Listeners\SendEmailVerificationNotification;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Event;

class EventServiceProvider extends ServiceProvider
{

    protected $listen = [
        // Registered::class => [
        //     SendEmailVerificationNotification::class,
        // ],
        "App\Events\JobPostEvent" => [
            "App\Listeners\SendEmailToAdmin"
        ]
    ];


    public function boot()
    {
        parent::boot();

        //
    }
}
