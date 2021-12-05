<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Http\Controllers\Auth\Dashboard;

use Str;
use Storage;
use App\Models\Image;
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

    if ($request->boolean('no_parents', false)) {
      $query = $query->doesntHave('parents');
    }

    $paginate = $request->get('per_page', null);
    if ($paginate) {
      $categories = $query->paginate($paginate);
    } else {
      $categories = $query->get();
    }

    return JsonResponse::success(['categories' => $categories]);
  }

  public function show(Category $category, Request $request): \Illuminate\Http\JsonResponse
  {
    $category = $category->load(['child']);

    if ($request->boolean('has_parent', false)) {
      $category = $category->append(['parent']);
      $category = $category->load(['parents']);
    }

    return JsonResponse::success(['category' => $category]);
  }

  public function store(Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'ru.name' => 'required|string',
      'en.name' => 'required|string',
      'ru.description' => 'required|string',
      'en.description' => 'required|string',
      'image' => 'required|exists:images,id',
      'file' => 'nullable|string',
      'category_id' => 'nullable|exists:categories,id',
    ]);

    $category = Category::create($request->except(['category', 'image']));
    $category->save();

    $image = Image::find($request->get('image'));
    $image->order = 1;
    $image->save();

    if ($c_id = $request->get('category_id', null)) {
      $category->parents()->attach($c_id);
    }

    $category->images()->saveMany([$image]);


    return JsonResponse::success([
      'category' => $category,
    ]);
  }

  public function update(Request $request, Category $category)
  {
    $request->validate([
      'ru.name' => 'required|string',
      'en.name' => 'required|string',
      'ru.description' => 'required|string',
      'en.description' => 'required|string',
      'image' => 'required|exists:images,id',
      'file' => 'nullable|string',
      'category_id' => 'nullable|exists:categories,id',
    ]);

    $category->update($request->except(['category_id', 'image']));
    $category->save();

    if (($category->image->id ?? 0 )!== $request->get('image')) {
      $image = Image::find($request->get('image'));
      $image->order = 1;
      $image->save();
      $category->images()->saveMany([$image]);
    }

    if ($category->parents()->where('id', ))

    if ($c_id = $request->get('category_id', null)) {
      if (($category->parents()->first()->id ?? 0) !== $c_id) {
        $category->parents()->detach();
        $category->parents()->attach($c_id);
      }
    }

    return JsonResponse::success([
      'category' => $category,
    ]);
  }

  public function destroy(Category $category): \Illuminate\Http\JsonResponse
  {
    $c = $category->toArray();

    foreach ($category->images as $image) {
      $image->delete();
    }

    $category->delete();

    return JsonResponse::success(['category' => $c]);
  }

  public function pdfUpload(Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'pdf' => 'required|file',
    ]);
    $name = Str::random(16) . '.pdf';
    $request->file('pdf')->storeAs(
      'pdf',
      $name
    );

    return JsonResponse::success([
      'name' => $name,
    ]);
  }

  public function pdfDelete(string $name): \Illuminate\Http\JsonResponse
  {

    $path = "pdf/" . $name;
    Storage::delete($path);

    return JsonResponse::success([
      'path' => $path,
    ]);
  }
}