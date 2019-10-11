<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Company;
use Faker\Generator as Faker;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'company_name' => $faker->company,
        'company_website' => $faker->domainName,
        'company_description' => $faker->realText(200, 2),
        'company_industry' => $faker->randomElement([0, 1, 2, 3, 4, 5, 6]),
        'company_no_of_employees' => $faker->randomElement(["0-25", "25-50", "50-100", "100+"]),
        'company_benefits' => $faker->catchPhrase
    ];
});
