<?php

namespace Database\Seeders;

use File;
use App\Models\Image;
use App\Models\Category;
use Illuminate\Database\Seeder;

class CategorySeed extends Seeder
{
  public array $data = [
   'ru' => [
     'name' => 'Посев и посадка',
     'description' => 'Посев и посадка'
   ],
    'en' => [
      'name' => 'Sowing and planting',
      'description' => 'Sowing and planting'
    ],
    'to_index' => true
  ];
  /**
   * Run the database seeds.
   *
   * @return void
   */
  public function run(): void
  {
    $dir = 'storage/' . date('Y/m/d') . '/';

    if(Category::all()->count() === 0) {
      File::isDirectory(public_path($dir)) or File::makeDirectory(public_path($dir), 0777, true, true);
      $dir .= 'track_1.png';
      \File::copy(public_path('images/user/track_1.png') ,  public_path($dir));

      $category = new Category($this->data);
      $category->save();

      $image = new Image();
      $image->name = 'track_1.png';
      $image->path = $dir;
      $image->order = 1;
      $image->size =\File::size(public_path($dir));
      $image->save();

      $category->images()->saveMany([$image]);
      $category->save();
    }
  }
}
