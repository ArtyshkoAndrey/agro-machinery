<?php

namespace App\Http\Controllers\Auth\Dashboard;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Traits\Controllers\UploadImage;

class ProductController extends Controller
{
  use UploadImage;
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
      $query = $query->whereTranslationLike('name', "%{$search}%");
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
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'ru.name' => 'required|string',
      'ru.description' => 'required|string',

      'en.name' => 'required|string',
      'en.description' => 'required|string',

      'cost' => 'required|integer|min:0',
      'category_id' => 'required|exists:categories,id',

      'suitable' => 'sometimes|array',
      'suitable.*' => 'sometimes|exists:products,id',

      'images' => 'required|array',
      'images.*.id' => 'required|exists:images,id',

      'new' => 'required|boolean',
      'popular' => 'required|boolean'
    ]);

    $product = new Product($request->except(
      ['images', 'category_id', 'suitable']
    ));

    $data = $request->all();

    $product->category()->associate($data['category_id']);

    $product->save();
    $order = 1;
    $images = [];
    foreach ($data['images'] as $image) {
      $image = Image::findOrFail($image['id']);
      $image->order = $order;
      $image->save();
      $images[] = $image;
      $order++;
    }
    $product->images()->saveMany($images);

    $product->suitable()->sync($data['suitable']);

    $product->save();

    return JsonResponse::success([
      'product' => $product
    ]);

  }

  /**
   * Display the specified resource.
   *
   * @param Product $product
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function show(Product $product): \Illuminate\Http\JsonResponse
  {
    $product->load(['suitable', 'category', 'images']);
    return JsonResponse::success(['product' => $product]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param Request $request
   * @param Product $product
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(Request $request, Product $product): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'ru.name' => 'required|string',
      'ru.description' => 'required|string',

      'en.name' => 'required|string',
      'en.description' => 'required|string',

      'cost' => 'required|integer|min:0',
      'category_id' => 'required|exists:categories,id',

      'suitable' => 'sometimes|array',
      'suitable.*' => 'sometimes|exists:products,id',

      'images' => 'required|array',
      'images.*.id' => 'required|exists:images,id',

      'new' => 'required|boolean',
      'popular' => 'required|boolean'
    ]);

    $product->update($request->except(
      ['images', 'category_id', 'suitable']
    ));

    $data = $request->all();

    $product->category()->associate($data['category_id']);

    $product->save();

    $product->suitable()->sync($data['suitable']);

    $product->save();

    return JsonResponse::success([
      'product' => $product
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
