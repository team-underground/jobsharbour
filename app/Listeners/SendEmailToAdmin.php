<?php

namespace App\Listeners;

use App\Events\JobPostEvent;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Support\Facades\Mail;

class SendEmailToAdmin
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //public function handle(UserRegistered $event)
        // {
        //     $data = array('name' => $event->user->name, 'email' => $event->user->email, 'body' => 'Welcome to our website. Hope you will enjoy our articles');

        //     Mail::send('emails.mail', $data, function($message) use ($data) {
        //         $message->to($data['email'])
        //                 ->subject('Welcome to our Website');
        //         $message->from('noreply@artisansweb.net');
        //     });
        // }
    }

    /**
     * Handle the event.
     *
     * @param  JobPostEvent  $event
     * @return void
     */
    public function handle($event)
    {
        $data = [
            'admin_email' => 'test@test.test',
            'userName' => $event->jobpost->user_name,
            'job_title' => $event->jobpost->job_title,
            'job_location' => $event->jobpost->job_location,
            'job_category' => $event->jobpost->job_category,
            'job_type' => $event->jobpost->job_type,
        ];
        Mail::send('email.jobpost', $data, function ($msg) use ($data) {
            $msg->to($data['admin_email'])
                ->subject('New Job arrive');
            $msg->from('norply@test.test');
        });
    }
}
