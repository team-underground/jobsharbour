<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Package;
use Faker\Generator as Faker;

$factory->define(Package::class, function (Faker $faker) {
    return [
        'package_name' => $faker->word(2),
        'package_name' => $faker->word(2),
        'package_name' => $faker->randomElement([0, 299, 0, 399])
    ];
});
