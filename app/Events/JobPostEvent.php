<?php

namespace App\Events;

use App\Jobpost;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class JobPostEvent
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $jobpost;

    public function __construct(Jobpost $jobpost)
    {
        $this->jobpost = $jobpost;
    }


    // public function broadcastOn()
    // {
    //     return new PrivateChannel('channel-name');
    // }
}
