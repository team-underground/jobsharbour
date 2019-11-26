<?php

namespace App\Http\Controllers;

use Analytics;
use App\Company;
use App\Jobpost;
use Inertia\Inertia;
use App\Enums\JobType;
use App\Enums\CategoryType;
use App\Enums\IndustryType;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Spatie\Analytics\Period;
use Illuminate\Support\Facades\DB;

use Artesaos\SEOTools\Facades\SEOMeta;
use Artesaos\SEOTools\Facades\OpenGraph;
use Artesaos\SEOTools\Facades\TwitterCard;
use Artesaos\SEOTools\Facades\JsonLd;
// OR
use Artesaos\SEOTools\Facades\SEOTools;

class JobpostsController extends Controller
{
    public function index()
    {
        if (request()->path() === 'jobs') {
            SEOMeta::setTitle('Jobs');

            $jobpost = Jobpost::published()->closed(false)->with('company');

            if ($industry = request('industry')) {
                $jobpost->industry(request('industry'));
            }

            $jobposts = $jobpost->filter(request()->only(['search', 'jobtype', 'salary', 'category']))
                ->orderByDesc('job_published_at')
                ->simplePaginate(10);

            $filters = request()->all('search', 'jobtype', 'salary', 'category');
            $jobtypes = JobType::toSelectArray();

            $categories = CategoryType::toSelectArray();

            return Inertia::render('Jobs', compact('jobposts', 'filters', 'jobtypes', 'categories'));
        } else {

            SEOMeta::setTitle('Home');

            $categoryWiseTotal = Jobpost::published()->closed(false)->groupBy('job_category')->select('job_category', \DB::raw('count(job_category) as `total`'))->orderBy('total', 'DESC')->limit(5)->get(['total', 'job_category'])->transform(function ($category) {
                return [
                    'category_name' => $category->job_category,
                    'total' => $category->total
                ];
            });

            $jobposts = Jobpost::published()->closed(false)->with('company')->orderByDesc('job_published_at')->simplePaginate(8);

            return Inertia::render('Welcome', [
                'jobposts' => $jobposts,
                'category_wise_total' => $categoryWiseTotal
            ]);
        }
    }

    public function show($jobSlug)
    {
        $post = Jobpost::with('company')->where('job_slug', $jobSlug)->firstOrFail();

        SEOMeta::setTitle($post->seo_title);
        SEOMeta::setDescription($post->meta_description);
        SEOMeta::addMeta('job:published_date', $post->job_published_at, 'property');
        SEOMeta::addMeta('job:category', $post->job_category, 'property');
        SEOMeta::addKeyword($post->meta_keywords);

        OpenGraph::setTitle($post->seo_title);
        OpenGraph::setDescription($post->meta_description);
        OpenGraph::setUrl(route('jobs.show', $post->job_slug));
        OpenGraph::addProperty('type', 'job');
        OpenGraph::addImage($post->company->company_logo_path);

        // record page views
        views($post)->record();

        return Inertia::render('JobDetails', compact('post'));
    }
}
