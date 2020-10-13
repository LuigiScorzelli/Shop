<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClothesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('clothes', function (Blueprint $table) {
            $table->increments('id');
            $table->string('image');
            $table->string('title', 80);
            $table->text('description')->nullable();
            $table->string('price');
            $table->string('brand', 50)->nullable();
            $table->string('info')->nullable();
            $table->string('sizes');
            $table->boolean('is_active')->default(true);
            $table->boolean('is_obvious')->default(false);           
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
        Schema::dropIfExists('clothes');
    }
}
