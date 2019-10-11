<?php

namespace App\Http\Controllers;

use App\Company;
use App\Jobpost;
use App\Enums\CategoryType;
use App\Enums\JobType;
use App\Enums\IndustryType;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Inertia\Inertia;

class JobpostsController extends Controller
{
    public function index()
    {
        // $jobtypeArray = explode(',', 'Freelance,Internship,Part Time, Full Time');

        // return $jobtypeIds = collect($jobtypeArray)->map(function ($j) {
        //     return \App\Enums\JobType::getValue(Str::studly($j, ' '));
        // });


        if (request()->path() === 'jobs') {
            $jobposts = Jobpost::with('company')
                ->filter(request()->only(['search', 'jobtype', 'salary']))
                ->orderByDesc('job_published_at')
                ->simplePaginate(6);

            $filters = request()->all('search', 'jobtype', 'salary');
            $jobtypes = JobType::toSelectArray();

            return Inertia::render('Jobs', compact('jobposts', 'filters', 'jobtypes'));
        } else {
            $jobposts = Jobpost::with('company')->orderByDesc('job_published_at')->simplePaginate(10);

            return Inertia::render('Welcome', compact('jobposts'));
        }
    }

    public function show($uuid)
    {
        // $post = Jobpost::with('company')->findOrFail($id);
        $jobpost = Jobpost::findByUuidOrFail($uuid);
        $post = $jobpost->load('company');

        return Inertia::render('JobDetails', compact('post'));
    }

    public function create()
    {
        $positions = CategoryType::toSelectArray();
        $jobtypes = JobType::toSelectArray();
        $industries = IndustryType::toSelectArray();

        return Inertia::render('Jobs/Create', compact('jobtypes', 'positions', 'industries'));
    }

    public function store(Request $request)
    {
        $input = $this->validate($request, [
            'job_title' => ['required'],
            'job_location' => ['required'],
            'job_position' => ['required'],
            'job_type' => ['required'],
            'job_salary' => ['required'],
            'job_description' => ['required'],
            'job_skills' => ['required'],
            'job_email' => ['required', 'email'],
            'job_published_at' => ['required'],

            'company_name' => ['required'],
            'company_website' => ['required'],
            'company_description' => ['required'],
            'company_industry' => ['required'],
            'company_no_of_employees' => ['required'],
            'company_benefits' => ['required']
        ]);

        // Start a try/catch block
        $companyCreated = Company::create($request->only([
            'company_name',
            'company_website',
            'company_description',
            'company_industry',
            'company_no_of_employees',
            'company_benefits'
        ]) + ['user_id' => 1]);

        Jobpost::create($request->except([
            'company_logo',
            'company_name',
            'company_website',
            'company_description',
            'company_industry',
            'company_no_of_employees',
            'company_benefits'
        ]) + [
            'user_id' => 1,
            'company_id' => $companyCreated->id,
            'job_slug' => Str::slug($input['job_title'])
        ]);
        // End

        session()->flash('success', 'Job Post successfully created.');

        return back();
    }
}
