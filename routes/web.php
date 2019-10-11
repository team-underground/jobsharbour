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
Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
});

// Jobs
Route::get('/jobs', 'JobpostsController@index')->name('jobs');
Route::get('/jobs/create', 'JobpostsController@create')->name('jobs.create');
Route::post('/jobs/create', 'JobpostsController@store')->name('jobs.store');
Route::get('/jobs/{uuid}', 'JobpostsController@show')->name('jobs.show');



// Resume Builder (Beta)

Route::get('/resume/builder', function () {
    return Inertia::render('ResumeBuilder');
});

Route::post('/resume/generated', function () {
    $resumedata = request('resumedata');
    return Inertia::render('ResumeGenerated', compact('resumedata'));
});
