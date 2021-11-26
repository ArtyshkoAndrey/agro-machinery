<?php

namespace App\Http\Controllers\Users;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;

class CatalogController extends Controller
{
  public function get(Request $request): \Illuminate\Http\JsonResponse
  {
    $products = Product::query();

    if ($new = $request->boolean('new', null)) {
      $products = $products->where('new', $new);
    }

    if ($popular = $request->boolean('popular', null)) {
      $products = $products->where('popular', $popular);
    }

    if ($request->boolean('has_images', false)) {
      $products = $products->with(['images']);
    }
    if ($request->boolean('has_image', false)) {
      $products = $products->with(['image']);
    }
    if ($request->boolean('has_category', false)) {
      $products = $products->with(['category']);
    }

    if ($category = $request->get('where_category', null)) {
      $category = Category::findOrFail($category);
      $ids = [];
      $ids[] = $category->id;

      foreach ($category->child as $category) {
        $ids[] = $category->id;

        if ($category->child()->count() > 0) {
          foreach ($category->child as $c) {
            $ids[] = $c->id;
          }
        }
      }

      $products = $products->whereHas('category', function (Builder $q) use ($ids) {
        $q->whereIn('id', $ids);
      });
    }

    $products = $products->get();
//    dd($products->toArray());
    return JsonResponse::success(['products' => $products]);
  }
}
