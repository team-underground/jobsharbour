<?php

namespace App\Listeners;

use App\Events\JobPostEvent;
use App\Mail\AdminJobalert;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailToAdmin
{

    public function __construct()
    {
        // 
    }


    public function handle($event)
    {
        $data = [
            'admin_email' => 'test@test.test',
        ];
        Mail::to($data['admin_email'])
            ->queue(new AdminJobalert($event));
    }
}
