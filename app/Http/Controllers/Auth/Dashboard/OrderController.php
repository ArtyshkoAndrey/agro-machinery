<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Http\Controllers\Auth\Dashboard;

use App\Models\Order;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class OrderController extends Controller
{

  public function index(Request $request): \Illuminate\Http\JsonResponse
  {
    $query = Order::query();

    $query = $query->orderByDesc('updated_at');

    if (($search = $request->get('search', '')) !== '') {
      $query = $query->where('email', 'like', "%{$search}%")
        ->orWhere('name', 'like', "%{$search}%");
    }

    $paginate = $request->get('per_page', null);
    if ($paginate) {
      $orders = $query->paginate($paginate);
    } else {
      $orders = $query->get();
    }

    return JsonResponse::success(['orders' => $orders]);
  }

  public function show(Order $order)
  {
    $order = $order->load(['products', 'products.image']);

    return JsonResponse::success([
      'order' => $order
    ]);
  }

}