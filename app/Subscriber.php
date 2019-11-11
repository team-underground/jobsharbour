<?php

namespace App;

use JamesMills\Uuid\HasUuidTrait;
use Illuminate\Database\Eloquent\Model;
use Rinvex\Subscriptions\Traits\HasSubscriptions;

class Subscriber extends Model
{
    use HasUuidTrait, HasSubscriptions;
    protected $guarded = [];
}
