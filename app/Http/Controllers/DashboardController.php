<?php

namespace App\Http\Controllers;

use App\Jobpost;
use Inertia\Inertia;
use Illuminate\Support\Facades\Gate;
use CyrildeWit\EloquentViewable\View;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $posts = Jobpost::published()->with('company')->orderByViews()->closed(false)->role()->limit(10)->get()->transform(function ($post) {

            return [
                'uuid' => $post->uuid,
                'job_title' => $post->job_title,
                'job_published_at_formatted' => $post->job_published_at_formatted,
                'total_page_views' => views($post)->count(),
                'unique_page_views' => views($post)->unique()->count()
            ];
        });
        $query = View::with('viewable')->whereHasMorph('viewable', [Jobpost::class], function ($query) {
            $query->published()->closed(false)->role();
        });

        $uniqueCounts = $query->select([
            \DB::raw('count(DISTINCT visitor, viewable_id) as `total`'),
            \DB::raw("DATE_FORMAT(viewed_at, '%Y-%m-%d') as day")
        ])->groupBy('day')->orderBy('day')->pluck('total', 'day')->all();

        $totalCounts = $query->select([
            \DB::raw('count(id) as `total`'),
            \DB::raw("DATE_FORMAT(viewed_at, '%Y-%m-%d') as day")
        ])->groupBy('day')->orderBy('day')->pluck('total', 'day')->all();

        return Inertia::render('Dashboard', [
            'posts' => $posts,
            'unique_counts' => count($uniqueCounts) > 1 ? $uniqueCounts : [],
            'total_counts' => count($totalCounts) > 1 ? $totalCounts : [],
            'can' => [
                'modify-user' => Gate::allows('modify-user')
            ]
        ]);
    }
}
