<?php

namespace App\Http\Controllers\Admin;

use App\Jobpost;
use Inertia\Inertia;
use App\Enums\{CategoryType, JobType, IndustryType};
use App\Events\JobPostEvent;
use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;

class JobpostsController extends Controller
{
	public function index()
	{
		$jobposts = Jobpost::with('company')
			->filter(request()->only('search'))
			->role()
			->orderByDesc('job_published_at')
			->simplePaginate(6);

		$filters = request()->all('search');

		return Inertia::render('Jobs/Index', compact('jobposts', 'filters'));
	}

	public function create()
	{
		$categories = CategoryType::toSelectArray();
		$jobtypes = JobType::toSelectArray();
		$industries = IndustryType::toSelectArray();

		$companies = auth()->user()->companies->map(function ($company) {
			return [
				"label" => $company->company_name,
				"value" => $company->id
			];
		});
		// return $companies;
		return Inertia::render('Jobs/Create', compact('jobtypes', 'categories', 'industries', 'companies'));
	}

	public function store(Request $request)
	{
		$input = $this->validate($request, [
			'company_id' => ['required'],
			'job_title' => ['required'],
			'job_location' => ['required'],
			'job_category' => ['required'],
			'job_type' => ['required'],
			'job_salary' => ['required'],
			'job_description' => ['required'],
			'job_skills' => ['required'],
			'job_email' => ['required', 'email'],
			'job_published_at' => ['required'],
			'job_closing_date' => ['required'],
		], [
			'company_id.required' => 'Please select a company',
		]);

		// dd($input);
		$input['job_published_at'] = Carbon::createFromFormat('d/m/Y', $input['job_published_at'])->format('Y-m-d');
		$input['job_closing_date'] = Carbon::createFromFormat('d/m/Y', $input['job_closing_date'])->format('Y-m-d');

		DB::transaction(function () use ($input) {
			$jobpost_created = Jobpost::create($input + [
				'user_id' => auth()->user()->id,
				'job_slug' => Str::slug($input['job_title'])
			]);
			// dd($jobpost_created);

			if ($jobpost_created) {
				$jobpost_created->attachTags($input['job_skills']);
			}

			$jobpost_created['user_name'] = auth()->user()->name;
			event(new JobPostEvent($jobpost_created));
		});

		session()->flash('success', 'Job Post Created.');
		return redirect()->route('admin.jobs.all');
	}

	public function edit($uuid, Request $request)
	{
		$jobpost = Jobpost::findByUuidOrFail($uuid);
		$post = $jobpost->load('company');
		$post->job_skills = $jobpost->tags->pluck('name')->toArray();

		$positions = CategoryType::toSelectArray();
		$jobtypes = JobType::toSelectArray();
		$industries = IndustryType::toSelectArray();

		$companies = auth()->user()->companies->map(function ($company) {
			return [
				"label" => $company->company_name,
				"value" => $company->id
			];
		});

		return Inertia::render('Jobs/Edit', compact('post', 'positions', 'jobtypes', 'industries', 'companies'));
	}

	public function update($uuid, Request $request)
	{
		$input = $this->validate($request, [
			'company_id' => ['required'],
			'job_title' => ['required'],
			'job_location' => ['required'],
			'job_position' => ['required'],
			'job_type' => ['required'],
			'job_salary' => ['required'],
			'job_description' => ['required'],
			'job_skills' => ['required'],
			'job_email' => ['required', 'email'],
			'job_published_at' => ['required'],
			'job_closing_date' => ['required']
		], [
			'company_id.required' => 'Please select a company'
		]);

		$input['job_published_at'] = Carbon::createFromFormat('d/m/Y', $input['job_published_at'])->format('Y-m-d');
		$input['job_closing_date'] = Carbon::createFromFormat('d/m/Y', $input['job_closing_date'])->format('Y-m-d');

		$jobpost = Jobpost::findByUuidOrFail($uuid);
		// dd($input);
		DB::transaction(function () use ($jobpost, $input, $request) {
			$jobpost->update($request->except([
				'job_type',
				'job_position',
				'job_published_at',
				'job_closing_date'
			]) + [
				'job_slug' => Str::slug($input['job_title']),
				'job_type' => (int) $input['job_type'],
				'job_position' => (int) $input['job_position'],
				'job_published_at' => $input['job_published_at'],
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
