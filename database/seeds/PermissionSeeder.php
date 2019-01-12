<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for($i=1;$i<=100;$i++){

            DB::table('permissions')->insert([
                'name' => str_random(10),
                'resource' => str_random(10),
            ]);


        }
    }
}
