<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Faker\Factory as Faker;
// use App\Models\Clothe;

class ClotheSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i=0; $i < 35; $i++) {

            $faker = Faker::create();

            DB::table('clothes')->insert([
                'image' => 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPQr7oMUxaHXZZzubRcr6gosdzwQ2YdFwUtQ&usqp=CAU',
                'title' => $faker->text($maxNbChars = 10),
                'description' => $faker->text($maxNbChars = 100),
                'price' => rand(1, 350),
                'brand' => $faker->word,
                'info' => $faker->text($maxNbChars = 20),
                'sizes' => Str::random(2),
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
                'category_id' => rand(1, 5)
            ]);
        }
    }
}
