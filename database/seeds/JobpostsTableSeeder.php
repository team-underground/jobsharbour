<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Arr;

class JobpostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\Jobpost::class, 50)->create()->each(function ($post) {
            $array = ['Laravel', 'Vuejs', 'PHP', 'MySQL', 'Reactjs'];
            $values = Arr::random($array, rand(1, 5));
            $post->attachTags($values);
        });
    }
}
