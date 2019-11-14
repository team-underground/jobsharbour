<?php

namespace App\Mail;

use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class JobPublished extends Mailable
{
    use Queueable, SerializesModels;
    public  $job_title;
    public  $job_starting_date;
    public $job_closing_date;
    public $jobPosterName;
    public $jobId;

    public function __construct($jobpost)
    {
        // dd($jobpost);
        $this->job_title = $jobpost->job_title;
        $this->jobId = $jobpost->job_id;
        $this->job_starting_date =  Carbon::parse($jobpost->job_starting_date)->format('M d, Y');
        $this->job_closing_date = Carbon::parse($jobpost->job_closing_date)->format('M d, Y');
        $this->jobPosterName = $jobpost->user->name;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('Job post published at Jobs Harbour')->view('email.jobpublished');
    }
}
