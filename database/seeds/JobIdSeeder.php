<?php

use App\Jobpost;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class JobIdSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach (Jobpost::all() as $key => $jobpost) {
            $jobpost->job_id = 'JH-' . rand(000000, 999999);
            $jobpost->save();
        }
    }
}
