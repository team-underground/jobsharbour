<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;


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
    return Inertia::render('Categories');
});

Route::get('/for-employers', function () {
    return Inertia::render('ForEmployers');
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
        return Inertia::render('Dashboard');
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
