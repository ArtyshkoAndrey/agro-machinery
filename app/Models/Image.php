<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Contracts\Foundation\Application;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Intervention\Image\ImageManagerStatic as Image2;

/**
 * App\Models\Image
 *
 * @property int                             $id
 * @property string                          $name
 * @property string                          $path
 * @property int                             $order
 * @property string|null                     $model_type
 * @property int|null                        $model_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read array|string|string[]      $uri
 * @method static Builder|Image newModelQuery()
 * @method static Builder|Image newQuery()
 * @method static Builder|Image query()
 * @method static Builder|Image whereCreatedAt($value)
 * @method static Builder|Image whereId($value)
 * @method static Builder|Image whereModelId($value)
 * @method static Builder|Image whereModelType($value)
 * @method static Builder|Image whereName($value)
 * @method static Builder|Image whereOrder($value)
 * @method static Builder|Image wherePath($value)
 * @method static Builder|Image whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Image extends Model
{
  use HasFactory;

  /**
   * @var string
   */
  public const DEFAULT = 'storage/placeholder/test_product.png';

  /**
   * @var string
   */
  protected static string $orderDirection = 'ASC';

  /**
   * @var string[]
   */
  protected $fillable = [
    'name',
    'path',
    'order',
    'size'
  ];

  /**
   * @var string[]
   */
  protected $appends = [
    'uri',
  ];

  public static function upload($request, &$uploadTo = null, $attr_name = 'image'): array
  {
    ini_set('memory_limit','256M');
    if ($request->hasFile($attr_name)) {
      $files = $request->file($attr_name);
      if (!is_array($files)) {
        $files = [$files];
      }

      $images = [];
      if ($uploadTo) {
        if ($uploadTo->images()->count() === 0) {
          $order = 1;
        } else {
          $order = $uploadTo->images->last()->order + 1;
        }
      } else {
        $order = 1;
      }

      foreach ($files as $file) {
        $dir = 'storage/' . date('Y/m/d') . '/';
        $path = $dir . $file->hashName();

        File::isDirectory(public_path($dir)) or File::makeDirectory(public_path($dir), 0777, true, true);

        Log::alert($dir);
        $image = new Image();

        $img = Image2::make($file->getRealPath());
        $img->resize(1000, null, function ($constraint) {
          $constraint->aspectRatio();
        });
        $img->save(public_path($path));

        $image->size = $img->filesize();

        $image->name = $file->getClientOriginalName();
        $image->path = $path;
        $image->order = $order ?? 0;
        $image->save();
        $images[] = $image;
        $order++;
      }
      if ($uploadTo) {
        $uploadTo->images()->saveMany($images);
        $uploadTo->save();
      }
      return $images;
    }

    return [];
  }

  /**
   *
   * @return Application|UrlGenerator|string
   */
  public function getUriAttribute()
  {
    return url(str_replace('storage', 'image', $this->path));
  }
}
