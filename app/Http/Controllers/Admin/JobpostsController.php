<?php

namespace App\Http\Controllers\Admin;

use App\Jobpost;
use Carbon\Carbon;
use Inertia\Inertia;
use Illuminate\Support\Str;
use App\Enums\JobStatusType;
use App\Events\JobPostEvent;
use Illuminate\Http\Request;
use App\Enums\ExperienceLevelType;
use Illuminate\Support\Facades\DB;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Gate;
use App\Enums\{CategoryType, JobType, IndustryType};

class JobpostsController extends Controller
{
	public function index()
	{
		$jobposts = Jobpost::with('company')
			->filter(request()->only('search'))
			->role()
			->orderByDesc('created_at')
			// ->orderByDesc('job_published_at')
			->simplePaginate(6);

		$filters = request()->all('search');

		return Inertia::render('Jobs/Index', compact('jobposts', 'filters'));
	}

	public function create()
	{
		$categories = CategoryType::toSelectArray();
		$jobtypes = JobType::toSelectArray();
		$industries = IndustryType::toSelectArray();
		$experiencelevels = ExperienceLevelType::toSelectArray();

		$companies = auth()->user()->getAllCompanies()->map(function ($company) {
			return [
				"label" => $company->company_name,
				"value" => $company->id
			];
		});
		// return $companies;
		return Inertia::render('Jobs/Create', compact('jobtypes', 'categories', 'industries', 'companies', 'experiencelevels'));
	}

	public function store(Request $request)
	{
		$input = $this->validate($request, [
			'company_id' => ['required'],
			'job_title' => ['required'],
			'job_location' => ['required'],
			'job_category' => ['required'],
			'job_type' => ['required'],
			'job_experience_level' => ['required'],
			'job_salary' => ['required'],
			'job_description' => ['required'],
			'job_skills' => ['required'],
			'job_email' => ['required', 'email'],
			'job_closing_date' => ['required'],
		], [
			'company_id.required' => 'Please select a company',
		]);

		DB::transaction(function () use ($request) {
			$jobpost_created = Jobpost::create($request->except([
				'job_type',
				'job_category',
				'job_experience_level',
				'job_skills',
				'job_closing_date'
			]) + [
				'user_id' => auth()->user()->id,
				'job_type' => (int) $request->job_type,
				'job_category' => (int) $request->job_category,
				'job_experience_level' => (int) $request->job_experience_level,
				'job_closing_date' => Carbon::createFromFormat('d/m/Y', $request->job_closing_date)->format('Y-m-d') . ' 23:59:59'
			]);

			if ($jobpost_created) {
				$jobpost_created->attachTags($request->job_skills);
			}

			$jobpost_created['user_name'] = auth()->user()->name;
			// TODO when a job is posted notify admin about it, and send a mail to the job publisher saying a thank you mail and inform him that post will be published within 24 hours after verification.
			event(new JobPostEvent($jobpost_created));
		});

		session()->flash('success', 'Job Post Created.');
		return redirect()->route('admin.jobs.all');
	}

	public function edit($uuid, Request $request)
	{
		$jobpost = Jobpost::findByUuidOrFail($uuid);

		$post = $jobpost->load('company');

		$categories = CategoryType::toSelectArray();
		$jobtypes = JobType::toSelectArray();
		$industries = IndustryType::toSelectArray();
		$experiencelevels = ExperienceLevelType::toSelectArray();

		$companies = auth()->user()->getAllCompanies()->map(function ($company) {
			return [
				"label" => $company->company_name,
				"value" => $company->id
			];
		});

		$can = [
			'publish-job' => Gate::allows('publish-job', $jobpost),
		];

		return Inertia::render('Jobs/Edit', compact('post', 'categories', 'jobtypes', 'industries', 'companies', 'can', 'experiencelevels'));
	}

	public function update($uuid, Request $request)
	{
		$input = $this->validate($request, [
			'company_id' => ['required'],
			'job_title' => ['required'],
			'job_location' => ['required'],
			'job_category' => ['required'],
			'job_type' => ['required'],
			'job_experience_level' => ['required'],
			'job_salary' => ['required'],
			'job_description' => ['required'],
			'job_skills' => ['required'],
			'job_email' => ['required', 'email'],
			'job_closing_date' => ['required']
		], [
			'company_id.required' => 'Please select a company'
		]);

		$input['job_closing_date'] = Carbon::createFromFormat('d/m/Y', $input['job_closing_date'])->format('Y-m-d') . ' 23:59:59';

		$jobpost = Jobpost::findByUuidOrFail($uuid);
		// dd($input);
		DB::transaction(function () use ($jobpost, $input, $request) {
			$jobpost->update($request->except([
				'job_type',
				'job_category',
				'job_experience_level',
				'job_skills',
				'job_closing_date'
			]) + [
				'job_type' => (int) $input['job_type'],
				'job_category' => (int) $input['job_category'],
				'job_experience_level' => (int) $input['job_experience_level'],
				'job_closing_date' => $input['job_closing_date'],
			]);

			if ($jobpost) {
				$jobpost->attachTags($input['job_skills']);
			}
		});


		session()->flash('success', 'Job Post Updated.');

		return back();
	}
}
