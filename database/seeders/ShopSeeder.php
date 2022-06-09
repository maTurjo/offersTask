<?php

namespace Database\Seeders;

use App\Models\Shop;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ShopSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //
        for ($x = 0; $x <= 10; $x++) {

            Shop::create([
                'name' => 'Shop'.$x,
                'discount' => 10,
                'latitude' => 123654,
                'longitude'=>11111,
                'image'=>null
            ]);
          }
    }
}
