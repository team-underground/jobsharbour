<?php

namespace App;

use App\Package;
use Illuminate\Database\Eloquent\Model;

class Subscription extends Model
{
    protected $guarded = [];

    public function package()
    {
        return $this->belongsTo(Package::class)->select('package_name', 'package_price', 'display_name');
    }
}
