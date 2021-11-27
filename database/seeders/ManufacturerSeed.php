<?php

namespace Database\Seeders;

use App\Models\Manufacturer;
use Illuminate\Database\Seeder;

class ManufacturerSeed extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run (): void
  {
    if (Manufacturer::all()->count() === 0) {
      Manufacturer::factory()
        ->count(5)
        ->create();
    }
  }
}
