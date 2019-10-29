<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Jobpost;
use App\Model;
use Faker\Generator as Faker;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;

$factory->define(Jobpost::class, function (Faker $faker) {

    $jobTitle = $faker->jobTitle;
    $array = ['Laravel', 'Vuejs', 'PHP', 'MySQL', 'Reactjs'];
    $values = Arr::random($array, rand(1, 5));

    return [
        'user_id' => rand(1, 3),
        'company_id' => rand(1, 10),
        'job_title' => $jobTitle,
        'job_slug' => Str::slug($jobTitle) . '-' . rand(1111, 9999),
        'job_location' => $faker->city,
        'job_category' => $faker->randomElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        'job_type' => $faker->randomElement([0, 1, 2, 3, 4]),
        'job_experience_level' => $faker->randomElement([0, 1, 2, 3, 4, 5]),
        'job_salary' => $faker->randomElement(["10k-15k", "15k-20k", "20k-40k", "40k+"]),
        'job_description' => $faker->realText(1000, 4),
        'job_email' => $faker->safeEmail,
        'seo_title' => $jobTitle,
        'meta_description' => $faker->sentence(rand(10, 20)),
        'meta_keywords' => $values,
        'job_starting_date' => $faker->date('Y-m-d', 'now'),
        'job_closing_date' => $faker->dateTimeBetween('+1 week', '+2 month'),
        'job_status' => $value = rand(1, 2),
        'job_published_at' => $value == 2 ? (string) Carbon::now() : null
    ];
});
