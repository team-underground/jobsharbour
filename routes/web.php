<?php

use App\Package;
use Inertia\Inertia;
use App\Enums\CategoryType;


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

Route::get('/', 'JobpostsController@index')->name('welcome');

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
Route::get('/faq', function () {
    return Inertia::render('Faq');
});
Route::get('/advertise', function () {
    return Inertia::render('Advertise');
});
Route::get('/contact', function () {
    return Inertia::render('Contact');
});
Route::get('/terms', function () {
    return Inertia::render('Terms');
});
Route::get('/privacy', function () {
    return Inertia::render('Privacy');
});
Route::get('/refund', function () {
    return Inertia::render('Refund');
});


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
Route::get('/jobs/{job_slug}', 'JobpostsController@show')->name('jobs.show');

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', 'DashboardController');

    Route::get('/settings', function () {
        return Inertia::render('Settings');
    });

    // Users
    Route::get('/admin/users', 'Admin\UsersController@index')->name('admin.users.all')->middleware('can:modify-user');

    // Admin / Employer Job
    Route::get('/admin/jobs', 'Admin\JobpostsController@index')->name('admin.jobs.all');
    Route::get('/admin/jobs/create', 'Admin\JobpostsController@create')->name('admin.jobs.create');
    Route::post('/admin/jobs/create', 'Admin\JobpostsController@store')->name('admin.jobs.store');
    Route::get('/admin/jobs/{uuid}/edit', 'Admin\JobpostsController@edit')->name('admin.jobs.edit');
    Route::put('/admin/jobs/{uuid}/update', 'Admin\JobpostsController@update')->name('admin.jobs.update');

    Route::post('/admin/jobs/{uuid}/publish', 'Admin\JobpostsPublishController@store')->name('admin.jobs.publish');


    // Admin / Employer Company
    Route::get('/admin/companies', 'Admin\CompaniesController@index')->name('admin.companies.all');
    Route::get('/admin/companies/create', 'Admin\CompaniesController@create')->name('admin.companies.create')->middleware('can:create-company');
    Route::post('/admin/companies/create', 'Admin\CompaniesController@store')->name('admin.companies.store')->middleware('can:create-company');
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

// Subscriber 
Route::post('/subscriber-plan/create', 'SubscriberController@createSubscriptionPlane');
Route::post('/subscriber', 'SubscriberController@store');
Route::get('/subscriber/cancel', 'SubscriberController@cancelSubscription');
Route::get('/subscriber/cancel-page', function () {
    return  Inertia::render('Unsubscribe');
});



// Route::get('login/LinkedIn', 'Auth\LoginController@redirectToProvider');
// Route::get('login/linkedIn/callback', 'Auth\LoginController@handleProviderCallback');

Route::post('/change-password', 'SettingsController@changePassword')->name('settings.changePassword');
Route::post('/update-profile', 'SettingsController@updateProfile')->name('settings.updateProfile');

Auth::routes(['verify' => true]);
