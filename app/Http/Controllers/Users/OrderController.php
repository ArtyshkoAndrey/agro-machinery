<?php

namespace App\Http\Controllers\Users;

use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
  public function create (Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'name' => 'required|string',
      'email' => 'required|email:rfc,dns',
      'phone' => 'required|string'
    ]);

    return JsonResponse::success([
      'form' => $request->all()
    ]);
  }
}
