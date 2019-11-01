<?php

use App\Package;
use Illuminate\Database\Seeder;
use Faker\Generator as Faker;

class PackagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $packages = [
            [
                'display_name' => 'Company Basic',
                'package_name' => 'company-basic',
                'package_price' => 0,
            ],
            [
                'display_name' => 'Company Pro',
                'package_name' => 'company-pro',
                'package_price' => 299,
            ],
            [
                'display_name' => 'Consultancy Basic',
                'package_name' => 'consultancy-basic',
                'package_price' => 0,
            ],
            [
                'display_name' => 'Consultancy Pro',
                'package_name' => 'consultancy-pro',
                'package_price' => 399,
            ]
        ];

        foreach ($packages as $key => $package) {
            Package::create([
                'package_name' => $package['package_name'],
                'display_name' => $package['display_name'],
                'package_price' => $package['package_price']
            ]);
        }
    }
}
