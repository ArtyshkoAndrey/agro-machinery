<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:            vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Traits\Models;

use App\Models\Image;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Support\Facades\Storage;

/**
 * @method static deleting(\Closure $param)
 */
trait HasImage
{
  public function images(): MorphMany
  {
    return $this->morphMany(Image::class, 'model')
      ->orderBy('order', 'ASC');
  }

  public function image(): HasOne
  {
    return $this->hasOne(Image::class, 'model_id', 'id')
      ->where('model_type', '=', self::class)
      ->orderBy('order', 'ASC')
      ->withDefault([
        'path' => Image::DEFAULT
      ]);
  }

  protected static function bootUseImages(): void
  {
    self::deleting(function ($model) {
      if ($model->images()->count()) {
        foreach ($model->images AS $image) {
          @Storage::delete(
            str_replace(
              'storage/',
              '',
              $image->path
            )
          );
        }
        $model
          ->images()
          ->delete();
      }
    });
  }
}