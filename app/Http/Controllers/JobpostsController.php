<?php

namespace App\Http\Controllers;

use App\Company;
use App\Jobpost;
use App\Enums\CategoryType;
use App\Enums\JobType;
use App\Enums\IndustryType;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Analytics;
use Spatie\Analytics\Period;

class JobpostsController extends Controller
{
    public function index()
    {
        // $jobtypeArray = explode(',', 'Freelance,Internship,Part Time, Full Time');

        // return $jobtypeIds = collect($jobtypeArray)->map(function ($j) {
        //     return \App\Enums\JobType::getValue(Str::studly($j, ' '));
        // });

        // return $jobposts = Jobpost::with('company')->orderByDesc('job_published_at')->simplePaginate(10);

        if (request()->path() === 'jobs') {
            $jobpost = Jobpost::published()->with('company');

            if ($industry = request('industry')) {
                $jobpost->industry(request('industry'));
            }

            $jobposts = $jobpost->filter(request()->only(['search', 'jobtype', 'salary', 'category']))
                ->orderByDesc('job_published_at')
                ->simplePaginate(6);

            $filters = request()->all('search', 'jobtype', 'salary', 'category');
            $jobtypes = JobType::toSelectArray();

            $categories = CategoryType::toSelectArray();

            return Inertia::render('Jobs', compact('jobposts', 'filters', 'jobtypes', 'categories'));
        } else {
            $jobposts = Jobpost::published()->with('company')->orderByDesc('job_published_at')->simplePaginate(6);

            // $pages = Analytics::fetchVisitorsAndPageViews(Period::days(7));

            return Inertia::render('Welcome', compact('jobposts'));
        }
    }

    public function show($uuid)
    {
        // $post = Jobpost::with('company')->findOrFail($id);
        $jobpost = Jobpost::findByUuidOrFail($uuid);
        $post = $jobpost->load('company');
        // record page views
        views($post)->record();

        return Inertia::render('JobDetails', compact('post'));
    }
}
