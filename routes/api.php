<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\UserController;
use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Users\ProductController;
use App\Http\Controllers\Users\CatalogController;
use App\Http\Controllers\Users\CategoryController;
use App\Http\Controllers\Auth\ResetPasswordController;
use App\Http\Controllers\Users\ManufacturerController;
use App\Http\Controllers\Auth\ForgotPasswordController;

Route::group(['middleware' => 'auth:api', 'prefix' => 'admin'], function () {
  Route::post('logout', [LoginController::class, 'logout']);

  Route::get('user', [UserController::class, 'current']);

  Route::post('products/image/upload', [\App\Http\Controllers\Auth\Dashboard\ProductController::class, 'upload']);
  Route::delete('products/image/remove/{id}', [\App\Http\Controllers\Auth\Dashboard\ProductController::class, 'remove']);

  Route::apiResources([
    'users' => App\Http\Controllers\Auth\Dashboard\UserController::class,
    'products' => App\Http\Controllers\Auth\Dashboard\ProductController::class,
    'categories' => App\Http\Controllers\Auth\Dashboard\CategoryController::class,
  ]);
});

Route::group(['middleware' => 'guest:api'], function () {
  Route::post('login', [LoginController::class, 'login']);

  Route::post('password/email', [ForgotPasswordController::class, 'sendResetLinkEmail']);
  Route::post('password/reset', [ResetPasswordController::class, 'reset']);
});

Route::group(['prefix' => 'users'], function () {
  Route::get('categories', [CategoryController::class, 'get']);
  Route::get('products', [ProductController::class, 'get']);

  Route::get('catalog', [CatalogController::class, 'get']);
  Route::get('manufacturers', [ManufacturerController::class, 'get']);

  Route::get('product/{product}', [ProductController::class, 'find']);
  Route::post('cart', [ProductController::class, 'cart']);
});
