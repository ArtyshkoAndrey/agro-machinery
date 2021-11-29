<?php

namespace App\Http\Controllers\Users;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class ProductController extends Controller
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
    $products= Product::query();


    if ($new = $request->boolean('new', null)) {
      $products = $products->where('new', $new);
    }

    if ($popular = $request->boolean('popular', null)) {
      $products = $products->where('popular', $popular);
    }

    if (($max_count = $request->get('max_count', null)) !== null) {
      $products = $products->take($max_count);
    }

    $products = $products->get();

    if ($request->has('has_images')) {
      $products = $products->load(['images']);
    }
    if ($request->has('has_image')) {
      $products = $products->load(['image']);
    }

    if ($request->has('has_category')) {
      $products = $products->load(['category']);
    }
    if ($request->has('has_suitable')) {
      $products = $products->load(['suitable']);
    }

    return JsonResponse::success(['products' => $products]);
  }

  public function find(Product $product): \Illuminate\Http\JsonResponse
  {
    $product->load([
      'images',
      'category.parents',
      'image',
      'suitable',
      'suitable.category',
      'suitable.image',
      'attributes'
    ]);

    return JsonResponse::success([
      'product' => $product
    ]);
  }
}