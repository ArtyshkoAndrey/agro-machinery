<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Traits\Controllers;

use App\Models\Image;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;

trait UploadImage
{
  public function upload(Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'model' => 'sometimes',
      'model_id' => 'sometimes'
    ]);

    $model_name = $request->get('model', null);
    $model_id = $request->get('model_id', null);

    try {
      if ($model_name) {
        $model_name = '\\App\\Models\\'.$model_name;
        $model = $model_name::findOrFail($model_id);
      } else {
        $model = null;
      }
      $images = Image::upload($request, $model);

      return JsonResponse::success(['images' => $images]);
    } catch (\Exception $exception) {
      return JsonResponse::error(['error' => $exception->getMessage()]);
    }
  }

  public function remove (int $id): \Illuminate\Http\JsonResponse
  {
    $image = Image::findOrFail($id);

    $image->delete();

    return JsonResponse::success([
      'image' => $image
    ]);
  }
}