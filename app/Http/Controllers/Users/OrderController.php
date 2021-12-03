<?php

namespace App\Http\Controllers\Users;

use Mail;
use App\Models\User;
use App\Models\Order;
use Illuminate\Http\Request;
use App\Helpers\JsonResponse;
use App\Mail\CreateOrderForUser;
use App\Mail\CreateOrderForAdmin;
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

    Mail::to($order->email)->send(new CreateOrderForUser($order));

    $users = User::all();

    foreach ($users as $user) {
      Mail::to($user->email)->send(new CreateOrderForAdmin($order, $user));
    }

    return JsonResponse::success([
      'order' => $order
    ]);
  }
}
