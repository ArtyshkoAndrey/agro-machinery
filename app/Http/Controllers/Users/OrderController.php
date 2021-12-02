<?php

namespace App\Http\Controllers\Users;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{
  public function create (Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate([
      'name'  => 'required|string',
      'email' => 'required|email:rfc,dns',
      'phone' => 'required|string',
      'cost'  => 'required'
    ]);

    $order = new Order($request->except('products'));
    $order->save();

    $order->products()->sync($request->get('products'));
    $order->save();

    return JsonResponse::success([
      'order' => $order
    ]);
  }
}
