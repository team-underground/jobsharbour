<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Jobpost;
use App\Model;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

$factory->define(Jobpost::class, function (Faker $faker) {
    // $jobTitle = $faker->randomElements([
    //     "International Creative Manager",
    //     "Lead Response Officer",
    //     "Dynamic Program Executive",
    //     "Chief Research Developer",
    //     "Principal Optimization Officer",
    //     "Corporate Web Planner",
    //     "Mobile Intimacy Translator",
    //     "Self-Quantification Connector",
    //     "Principal Digital Imaging Connector"
    // ]);

    $jobTitle = $faker->jobTitle;

    return [
        'user_id' => $faker->randomDigitNot(0),
        'company_id' => $faker->randomDigitNot(0),
        'job_title' => $jobTitle,
        'job_slug' => Str::slug($jobTitle),
        'job_location' => $faker->city,
        'job_category' => $faker->randomElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]),
        'job_type' => $faker->randomElement([0, 1, 2, 3, 4]),
        'job_salary' => $faker->randomElement(["10k-15k", "15k-20k", "20k-40k", "40k+"]),
        'job_description' => $faker->realText(1000, 4),
        'job_skills' => ['Laravel', 'Vuejs', 'PHP', 'MySQL', 'Reactjs'],
        'job_email' => $faker->safeEmail,
        'job_published_at' => $faker->date('Y-m-d', 'now'),
        'job_closing_date' => $faker->date('Y-m-d', 'now')
    ];
});
