<?php

use App\User;
use App\Enums\PackageType;
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
        $employer = factory(User::class)->create([
            'name' => 'Jobsharbour Company',
            'email' => 'company@jobsharbour.com',
            'type' => 1
        ]);

        $employer->subscriptions()->create([
            'user_id' => $employer->id,
            'package_id' => PackageType::CompanyBasic()->value
        ]);

        $consultancy = factory(User::class)->create([
            'name' => 'Jobsharbour Consultancy',
            'email' => 'consultancy@jobsharbour.com',
            'type' => 2
        ]);

        $consultancy->subscriptions()->create([
            'user_id' => $employer->id,
            'package_id' => PackageType::ConsultancyBasic()->value
        ]);
    }
}
