<?php

namespace App\Http\Controllers\Admin;

use App\User;
use App\Jobpost;
use Carbon\Carbon;
use App\Mail\JobPublished;
use App\Enums\JobStatusType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Mail;

class JobpostsPublishController extends Controller
{
    public function store($uuid, Request $request)
    {
        $jobpost = Jobpost::findByUuidOrFail($uuid);

        if (Gate::denies('publish-job', $jobpost)) {
            abort(403, 'You are not authorised');
        }

        DB::transaction(function () use ($jobpost) {
            $jobpost->job_published_at = (string) Carbon::now();
            $jobpost->job_status = JobStatusType::getInstance(JobStatusType::Published)->value;
            $jobpublised = $jobpost->save();

            $jobPoster = User::find($jobpost->user_id, ['email', 'name']);
            $jobpost->jobPosterName = $jobPoster['name'];

            if ($jobpublised) {
                Mail::to($jobPoster['email'])->queue(new JobPublished($jobpost));
            }
        });

        session()->flash('success', 'Job Post Published.');

        return back();
    }
}
