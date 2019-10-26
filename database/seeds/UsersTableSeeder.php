<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
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

        factory(User::class)->create([
            'name' => 'Jobsharbour Company',
            'email' => 'company@jobsharbour.com',
            'type' => 1
        ]);

        factory(User::class)->create([
            'name' => 'Jobsharbour Consultancy',
            'email' => 'consultancy@jobsharbour.com',
            'type' => 2
        ]);

        factory(App\User::class, 47)->create();
        // factory(App\User::class, 50)->create()->each(function($u) {
        //     $u->posts()->save(factory(App\Post::class)->make());
        // });
    }
}
