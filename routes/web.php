<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ImageController;
use App\Http\Controllers\Spa\SpaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
//Route::get('email/email-create-order-for-user', [SpaController::class, 'email']);
Route::get('/image/{path}', [ImageController::class, 'show'])->where('path', '.*');
Route::get('/admin', [SpaController::class, 'admin']);
Route::group(['prefix' => 'admin'], function () {
  Route::get('{path}', [SpaController::class, 'admin'])->where('path', '(.*)')->name('admin');
});
Route::get('{path}', [SpaController::class, 'index'])->where('path', '(.*)')->name('index');
