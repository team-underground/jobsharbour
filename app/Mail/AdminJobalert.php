<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class AdminJobalert extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public $userName;
    public $job_title;
    public $job_location;
    public $job_category;
    public $job_type;


    public function __construct($event)
    {

        $this->userName = $event->jobpost->user_name;
        $this->job_title  = $event->jobpost->job_title;
        $this->job_location = $event->jobpost->job_location;
        $this->job_category = $event->jobpost->job_category;
        $this->job_type = $event->jobpost->job_type;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Job Post for Moderation')->view('email.jobpost');
    }
}
