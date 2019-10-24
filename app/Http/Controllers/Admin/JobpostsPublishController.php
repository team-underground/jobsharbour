<?php

namespace App\Http\Controllers\Admin;

use App\Jobpost;
use Carbon\Carbon;
use App\Enums\JobStatusType;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;

class JobpostsPublishController extends Controller
{
    public function store($uuid, Request $request)
    {
        $jobpost = Jobpost::findByUuidOrFail($uuid);

        if (Gate::denies('publish-job', $jobpost)) {
            abort(403, 'You are not authorised');
        }

        $jobpost->job_published_at = (string) Carbon::now();
        $jobpost->job_status = JobStatusType::getInstance(JobStatusType::Published)->value;
        $jobpost->save();

        session()->flash('success', 'Job Post Published.');

        return back();
    }
}
