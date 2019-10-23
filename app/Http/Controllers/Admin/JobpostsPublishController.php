<?php

namespace App\Http\Controllers\Admin;

use App\Jobpost;
use Carbon\Carbon;
use App\Enums\JobStatusType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class JobpostsPublishController extends Controller
{
    public function store($uuid, Request $request)
    {
        $jobpost = Jobpost::findByUuidOrFail($uuid);
        $jobpost->job_published_at = (string) Carbon::now();
        $jobpost->job_status = JobStatusType::getInstance(JobStatusType::Published)->value;
        $jobpost->save();

        session()->flash('success', 'Job Post Published.');

        return back();
    }
}
