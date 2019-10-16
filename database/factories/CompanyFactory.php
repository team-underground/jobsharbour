<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Company;
use Faker\Generator as Faker;

$factory->define(Company::class, function (Faker $faker) {
    return [
        'user_id' => $faker->randomDigitNot(0),
        'company_logo' => 'https://loremflickr.com/320/240?random=' . $faker->randomDigit,
        'company_name' => $faker->company,
        'company_website' => $faker->domainName,
        'company_description' => $faker->realText(200, 2),
        'company_industry' => $faker->randomElement([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]),
        'company_no_of_employees' => $faker->randomElement(["0-25", "25-50", "50-100", "100+"]),
        'company_benefits' => $faker->realText(20, 2),
    ];
});
