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
        'user_id' => 1,
        'company_id' => 1,
        'job_title' => $jobTitle,
        'job_slug' => Str::slug($jobTitle),
        'job_location' => $faker->city,
        'job_position' => $faker->randomElement([0, 1, 2, 3, 4, 5]),
        'job_type' => $faker->randomElement([0, 1, 2, 3, 4]),
        'job_salary' => $faker->randomElement(["50K-100K", "100K-150K", "150K-200K", "200K-400K", "400K+"]),
        'job_description' => $faker->realText(1000, 4),
        'job_skills' => $faker->randomElement(['Laravel', 'Vuejs', 'PHP', 'MySQL', 'Reactjs']),
        'job_email' => $faker->safeEmail,
        'job_published_at' => $faker->date('Y-m-d', 'now')


    ];
});
