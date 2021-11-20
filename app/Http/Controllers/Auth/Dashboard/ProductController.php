<?php

namespace App\Http\Controllers\Auth\Dashboard;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class ProductController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @param Request $request
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function index(Request $request): \Illuminate\Http\JsonResponse
  {
    $query = Product::query();

    $query = $query->orderByDesc('updated_at');

    if (($search = $request->get('search', '')) !== '') {
      $query = $query->whereTranslationLike('name', 'like', "%{$search}%")
        ->orWhereTranslationLike('description', 'like', "%{$search}%");
    }

    $paginate = $request->get('per_page', null);
    if ($paginate) {
      $products = $query->paginate($paginate);
    } else {
      $products = $query->get();
    }

    return JsonResponse::success(['products' => $products]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param Request $request
   *
   * @return void
   */
  public function store(Request $request): void
  {
    $request->validate([
      'name' => 'required|string',
      'email' => 'required|email|unique:users,email',
      'password' => 'required|string|min:6',
    ]);
  }

  /**
   * Display the specified resource.
   *
   * @param Product $product
   *
   * @return Response
   */
  public function show(Product $product): Response
  {

  }

  /**
   * Update the specified resource in storage.
   *
   * @param Request $request
   * @param Product $product
   *
   * @return void
   */
  public function update(Request $request, Product $product): void
  {
    $request->validate([
      'name' => 'required|string',
      'password' => 'nullable|string',
    ]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param Product $product
   *
   * @return void
   */
  public function destroy(Product $product): void
  {

  }
}
