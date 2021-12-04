<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Http\Controllers\Auth\Dashboard;

use Str;
use File;
use Storage;
use App\Models\Category;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;
use App\Traits\Controllers\UploadImage;

class CategoryController extends Controller
{
  use UploadImage;

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

  public function show(Category $category): \Illuminate\Http\JsonResponse
  {
    $category = $category->load(['child']);

    return JsonResponse::success(['category' => $category]);
  }

  public function pdfUpload(Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'pdf' => 'required|file'
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