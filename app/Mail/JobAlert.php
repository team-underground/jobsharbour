<?php

namespace App\Mail;

use App\Subscriber;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class JobAlert extends Mailable
{
    use Queueable, SerializesModels;

    public $name;
    public $unsubscribeUrl;
    public function __construct($subscriber)
    {
        $this->name = $subscriber->name;
        $this->unsubscribeUrl = $subscriber->unsubscribeUrl;
    }


    public function build()
    {
        return $this->view('email.jobalert');
    }
}
