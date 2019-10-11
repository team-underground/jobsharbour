<?php

use Illuminate\Database\Seeder;

class JobpostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Jobpost::class, 50)->create();
    }
}
