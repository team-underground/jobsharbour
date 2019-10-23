<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Company;
use App\Jobpost;

class AuthServiceProvider extends ServiceProvider
{
    /**
     * The policy mappings for the application.
     *
     * @var array
     */
    protected $policies = [
        // 'App\Model' => 'App\Policies\ModelPolicy',
    ];

    /**
     * Register any authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        $this->registerPolicies();
        $this->registerCompanyPolicies();
        $this->registerJobPolicies();
        $this->registerUserPolicies();
    }

    public function registerUserPolicies()
    {
        Gate::define('create-user', function ($user) {
            if (auth()->user()->isAdmin()) {
                return true;
            }
            return false;
        });

        Gate::define('update-user', function ($user) {
            if (auth()->user()->isAdmin()) {
                return true;
            }
            return false;
        });

        Gate::define('delete-user', function ($user) {
            if (auth()->user()->isAdmin()) {
                return true;
            }
            return false;
        });
    }

    public function registerJobPolicies()
    {
        Gate::define('publish-job', function ($user, Jobpost $post) {
            if (auth()->user()->isAdmin() && !$post->job_status == JobStatusType::getInstance(JobStatusType::Published)->key) {
                return true;
            }
            return false;
        });
    }

    public function registerCompanyPolicies()
    {
        Gate::define('create-company', function ($user) {
            if (auth()->user()->isAdmin()) {
                return true;
            }
            if (auth()->user()->isEmployer() && auth()->user()->companies->count() >= 1) {
                return false;
            }
            if (auth()->user()->isConsultancy() && auth()->user()->subsciption()->package_name == 'consultancy-basic' && auth()->user()->companies->count() >= 5) {
                return false;
            }
            if (auth()->user()->isConsultancy() && auth()->user()->subsciption()->package_name == 'consultancy-pro') {
                return false;
            }
            return false;
        });

        Gate::define('update-company', function ($user, Company $company) {
            return auth()->user()->isAdmin() or ($user->id == $company->user_id);
        });

        Gate::define('delete-company', function ($user, Company $company) {
            return auth()->user()->isAdmin() or ($user->id == $company->user_id);
        });
    }
}
