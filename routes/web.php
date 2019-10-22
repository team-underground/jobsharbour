<?php

use App\Enums\CategoryType;
use App\Jobpost;
use App\Package;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'JobpostsController@index');

Route::get('/about', function () {
    return Inertia::render('About');
});
Route::get('/categories', function () {
    $categories = CategoryType::toSelectArray();

    return Inertia::render('Categories', [
        'categories' => $categories
    ]);
});

Route::get('/for-employers', function () {
    $pricings = Package::select('package_name', 'display_name', 'package_price')->get()->groupBy('package_name')->transform(function ($package) {
        return $package->first();
    })->toArray();
    return Inertia::render('ForEmployers', [
        'pricing' => $pricings
    ]);
});


// Auth::routes();
// Route::get('/home', 'HomeController@index')->name('home');


Route::get('/home', function () {
    return redirect('/dashboard');
})->middleware('auth');

Route::get('login', function () {
    return Inertia::render('Auth/Login');
})->middleware('guest')->name('login');
Route::post('login')->name('login.attempt')->uses('Auth\LoginController@login')->middleware('guest');

Route::post('logout')->name('logout')->uses('Auth\LoginController@logout');

Route::get('register', function () {
    return Inertia::render('Auth/Register');
})->middleware('guest');
Route::post('register')->name('register')->uses('Auth\RegisterController@register')->middleware('guest');

// Email Verify 
// Route::get('email/verify', 'Auth\VerificationController@show')
// ->name('verification.notice');
// Route::get('email/verify/{id}', 'Auth\VerificationController@verify')->name('verification.verify');
// Route::get('email/resend', 'Auth\VerificationController@resend')
// ->name('verification.resend');

// Password Resets
// Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('password.request');
Route::get('password/reset', function () {
    return Inertia::render('Auth/Email');
})->middleware('guest');
Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('password.email');

// Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('password.reset');
Route::get('password/reset/{token}', function ($token) {
    $email = request('email');
    return Inertia::render('Auth/Reset', compact('token', 'email'));
})->middleware('guest')->name('password.reset');
Route::post('password/reset', 'Auth\ResetPasswordController@reset')->name('password.update');


// Jobs
Route::get('/jobs', 'JobpostsController@index')->name('jobs');
Route::get('/jobs/{uuid}', 'JobpostsController@show')->name('jobs.show');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', function () {
        $posts = Jobpost::with('company')->orderByViews()->closed(false)->limit(10)->get()->transform(function ($post) {
            return [
                'uuid' => $post->uuid,
                'job_title' => $post->job_title,
                'job_published_at_formatted' => $post->job_published_at_formatted,
                'total_page_views' => views($post)->count(),
                'unique_page_views' => views($post)->unique()->count()
            ];
        });
        return Inertia::render('Dashboard', [
            'posts' => $posts
        ]);
    });

    Route::get('/settings', function () {
        return Inertia::render('Settings');
    });

    // Users
    Route::get('/admin/users', 'Admin\UsersController@index')->name('admin.users.all');

    // Admin / Employer Job
    Route::get('/admin/jobs', 'Admin\JobpostsController@index')->name('admin.jobs.all');
    Route::get('/admin/jobs/create', 'Admin\JobpostsController@create')->name('admin.jobs.create');
    Route::post('/admin/jobs/create', 'Admin\JobpostsController@store')->name('admin.jobs.store');
    Route::get('/admin/jobs/{uuid}/edit', 'Admin\JobpostsController@edit')->name('admin.jobs.edit');
    Route::put('/admin/jobs/{uuid}/update', 'Admin\JobpostsController@update')->name('admin.jobs.update');

    // Admin / Employer Company
    Route::get('/admin/companies', 'Admin\CompaniesController@index')->name('admin.companies.all');
    Route::get('/admin/companies/create', 'Admin\CompaniesController@create')->name('admin.companies.create');
    Route::post('/admin/companies/create', 'Admin\CompaniesController@store')->name('admin.companies.store');
    Route::get('/admin/companies/{uuid}/edit', 'Admin\CompaniesController@edit')->name('admin.companies.edit');
    Route::put('/admin/companies/{uuid}/update', 'Admin\CompaniesController@update')->name('admin.companies.update');
    Route::delete('/admin/companies/{uuid}/delete', 'Admin\CompaniesController@deleteLogo')->name('admin.companies.deletelogo');
});


// Resume Builder (Beta)
Route::get('/resume/builder', function () {
    return Inertia::render('ResumeBuilder');
});

Route::post('/resume/generated', function () {
    $resumedata = request('resumedata');
    return Inertia::render('ResumeGenerated', compact('resumedata'));
});



Route::get('login/LinkedIn', 'Auth\LoginController@redirectToProvider');
Route::get('login/linkedIn/callback', 'Auth\LoginController@handleProviderCallback');
