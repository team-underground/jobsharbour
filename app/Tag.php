<?php

namespace App;

use App\Jobpost;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    protected $guarded = [];

    public function jobs()
    {
        return $this->morphedByMany(Jobpost::class, 'taggable');
    }
}
