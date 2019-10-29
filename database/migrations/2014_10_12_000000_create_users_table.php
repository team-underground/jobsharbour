<?php

use App\Enums\UserType;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
	/**
	 * Run the migrations.
	 *
	 * @return void
	 */
	public function up()
	{
		Schema::create('users', function (Blueprint $table) {
			$table->bigIncrements('id');
			$table->uuid('uuid')->unique();
			$table->string('name');
			$table->string('email')->unique();
			$table->timestamp('email_verified_at')->nullable();
			$table->string('password');
			$table->string('provider_id')->nullable();
			$table->string('phone')->nullable();
			$table->string('photo')->nullable();
			$table->tinyInteger('type')->unsigned()->default(UserType::Employer);
			$table->rememberToken();
			$table->timestamps();
		});

		Artisan::call('db:seed', [
			'--class' => AdminUserSeeder::class
		]);
	}

	/**
	 * Reverse the migrations.
	 *
	 * @return void
	 */
	public function down()
	{
		Schema::dropIfExists('users');
	}
}
