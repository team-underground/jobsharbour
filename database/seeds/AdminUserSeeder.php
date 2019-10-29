<?php

use App\User;
use Illuminate\Database\Seeder;

class AdminUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class)->create([
            'name' => 'Jobsharbour Admin',
            'email' => 'admin@jobsharbour.com',
            'type' => 0
        ]);
    }
}
