<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Enums\JobStatusType;

class CreateJobpostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('jobposts', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->uuid('uuid')->unique();

            $table->unsignedBigInteger('user_id');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');

            $table->unsignedBigInteger('company_id');
            $table->foreign('company_id')->references('id')->on('companies')->onDelete('cascade');

            $table->string('job_title');
            $table->string('job_slug')->unique();
            $table->string('job_location');
            $table->string('job_salary');
            $table->text('job_description');
            $table->text('job_email');
            $table->tinyInteger('job_category')->unsigned();
            $table->tinyInteger('job_type')->unsigned();
            $table->tinyInteger('job_experience_level')->unsigned();

            $table->timestamp('job_starting_date')->nullable();
            $table->timestamp('job_closing_date')->nullable();
            $table->tinyInteger('job_status')->unsigned()->default(JobStatusType::Moderation);
            $table->timestamp('job_published_at')->nullable();

            $table->string('seo_title')->nullable();
            $table->text('meta_description');
            $table->text('meta_keywords');

            $table->boolean('featured')->default(0);

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('jobposts');
    }
}
