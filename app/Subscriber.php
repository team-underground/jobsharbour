<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Rinvex\Subscriptions\Traits\HasSubscriptions;

class Subscriber extends Model
{
    use HasSubscriptions;
    protected $guarded = [];
}
