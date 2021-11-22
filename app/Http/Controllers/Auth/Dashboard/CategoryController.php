<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Http\Controllers\Auth\Dashboard;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
  public function index(Request $request): \Illuminate\Http\JsonResponse
  {
    $query = Category::query();
//    $query = $query->getTranslationsArray();

    $query = $query->orderByDesc('updated_at');

    if (($search = $request->get('search', '')) !== '') {
      $query = $query->whereTranslationLike('name', 'like', "%{$search}%");
    }

    $paginate = $request->get('per_page', null);
    if ($paginate) {
      $categories = $query->paginate($paginate);
    } else {
      $categories = $query->get();
    }

    return JsonResponse::success(['categories' => $categories]);
  }
}