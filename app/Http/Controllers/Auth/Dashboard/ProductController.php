<?php

namespace App\Http\Controllers\Auth\Dashboard;

use App\Models\Image;
use App\Models\Product;
use Illuminate\Http\Request;
use App\Models\Manufacturer;
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
      'popular' => 'required|boolean',

      'attributes' => 'sometimes|array',
      'attributes.*.id' => 'required|exists:attributes,id',
      'attributes.*.value' => 'required|string',
    ]);

    $product = new Product($request->except(
      ['images', 'category_id', 'suitable', 'attributes']
    ));

    $data = $request->all();

    $product->category()->associate($data['category_id']);
    $product->manufacturer()->associate(Manufacturer::first()->id);

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
    $attrs = $request->get('attributes');
    if (count($attrs) > 0) {
      foreach ($attrs as $item) {
        $product->attributes()->attach($item['id'], ['value' => $item['value']]);
      }
    }

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
    $product->load(['suitable', 'category', 'images', 'attributes']);
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
      'popular' => 'required|boolean',

      'attributes' => 'sometimes|array',
      'attributes.*.id' => 'required|exists:attributes,id',
      'attributes.*.value' => 'required|string',
    ]);

    $product->update($request->except(
      ['images', 'category_id', 'suitable']
    ));

    $data = $request->all();

    $product->category()->associate($data['category_id']);
    $product->manufacturer()->associate(Manufacturer::first()->id);

    $product->save();

    $product->suitable()->sync($data['suitable']);

    $attrs = $request->get('attributes');
    $product->attributes()->detach();
    if (count($attrs) > 0) {
      foreach ($attrs as $item) {
        $product->attributes()->attach($item['id'], ['value' => $item['value']]);
      }
    }

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
