<?php

namespace App\Http\Controllers\Auth\Dashboard;

use App\Models\Attribute;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class AttributeController extends Controller
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
    $query = Attribute::query();

    $query = $query->orderByDesc('updated_at');

    if (($search = $request->get('search', '')) !== '') {
      $query = $query->whereTranslationLike('name', "%{$search}%");
    }

    $paginate = $request->get('per_page', null);
    if ($paginate) {
      $attributes = $query->paginate($paginate);
    } else {
      $attributes = $query->get();
    }

    return JsonResponse::success(['attributes' => $attributes]);
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
      'en.name' => 'required|string',
    ]);

    $attribute = new Attribute($request->all());
    $attribute->save();

    return JsonResponse::success(['attribute' => $attribute]);
  }

  /**
   * Display the specified resource.
   *
   * @param Attribute $attribute
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function show(Attribute $attribute): \Illuminate\Http\JsonResponse
  {
    return JsonResponse::success([
      'attribute' => $attribute,
    ]);
  }

  /**
   * Update the specified resource in storage.
   *
   * @param Request   $request
   * @param Attribute $attribute
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(Request $request, Attribute $attribute): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'ru.name' => 'required|string',
      'en.name' => 'required|string',
    ]);

    $attribute->update($request->all());
    $attribute->save();

    return JsonResponse::success(['attribute' => $attribute]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param Attribute $attribute
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function destroy(Attribute $attribute): \Illuminate\Http\JsonResponse
  {
    $attribute->delete();

    return JsonResponse::success(['attribute' => $attribute]);
  }
}
