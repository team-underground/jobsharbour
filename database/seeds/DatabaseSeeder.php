<?php

use App\Jobpost;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call([
            UsersTableSeeder::class,
            CompaniesTableSeeder::class,
        ]);

        Jobpost::disableSearchSyncing();
        $this->call(JobpostsTableSeeder::class);
        Jobpost::all()->searchable();
        Jobpost::enableSearchSyncing();
    }
}
