<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Http\Controllers\Users;

use Illuminate\Http\Request;
use App\Models\Manufacturer;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class ManufacturerController extends Controller
{

  public function get(Request $request): \Illuminate\Http\JsonResponse
  {
    $manufacturers = Manufacturer::query();

    if ($request->boolean('has_products', false)) {
      $manufacturers->with(['products']);
    }

    $manufacturers = $manufacturers->get();

    if ($request->boolean('has_products_count', false)) {
      $manufacturers->append(['products_count']);
    }

    return JsonResponse::success([
      'manufacturers' => $manufacturers,
    ]);

  }
}