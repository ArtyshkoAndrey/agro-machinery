<?php

namespace App\Http\Controllers\Users;

use App\Models\Category;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
  /**
   * Get Categories with Filters
   *
   * @param Request $request
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function get(Request $request): \Illuminate\Http\JsonResponse
  {
    $categories = Category::query();

    if ($category = $request->get('category', null)) {
      $categories = $categories->findOrFail($category);
    }

    if ($only_owner = $request->boolean('only_owner', false)) {
      $categories = $categories->doesntHave('parents');
    }

    if ($to_index = $request->get('to_index', null)) {
      $categories = $categories->where('to_index', $to_index);
    }

    if (($max_count = $request->get('max_count', null)) !== null) {
      $categories = $categories->take($max_count);
    }

    if($category === null) {
      $categories = $categories->get();
    }

    if ($request->boolean('has_parent', false)) {
      $categories = $categories->append(['parent']);
      $categories = $categories->load(['parents']);

    }

    if ($request->boolean('has_child', false)) {
      $categories = $categories->load(['child']);
    }

    return JsonResponse::success(['categories' => $categories]);
  }
}
