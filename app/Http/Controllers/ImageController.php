<?php
/*
 * Copyright (c) 2021.
 * This code is the property of the Fulliton developer.
 * Write all questions and suggestions on the Vkontakte social network https://vk.com/fulliton
 */

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use League\Glide\ServerFactory;

/**
 * Controller for caching and image optimization
 */
class ImageController extends Controller
{

  /**
   * Cache optimized image
   * return Image
   *
   * @param string  $path
   * @param Request $request
   */
  public function show(string $path, Request $request): void
  {
    $server = ServerFactory::create([
      'source' => config('cache.glide_path'),
      'cache' => config('cache.glide_path'),
      'cache_path_prefix' => '.cache',
    ]);
    $server->outputImage($path, $request->all());
  }
}