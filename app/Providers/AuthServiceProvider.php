<?php

namespace App\Providers;

use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;
use Illuminate\Support\Facades\Gate;
use App\Company;

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
    }

    public function registerCompanyPolicies()
    {
        Gate::define('update-company', function ($user, Company $company) {
            return auth()->user()->isAdmin() or ($user->id == $company->user_id);
        });

        Gate::define('delete-company', function ($user, Company $company) {
            return auth()->user()->isAdmin() or ($user->id == $company->user_id);
        });
    }
}
