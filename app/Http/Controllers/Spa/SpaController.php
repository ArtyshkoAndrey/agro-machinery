<?php

namespace App\Http\Controllers\Spa;

use App\Models\User;
use App\Models\Order;
use App\Mail\CreateOrderForUser;
use App\Mail\CreateOrderForAdmin;
use App\Http\Controllers\Controller;

class SpaController extends Controller
{
  public function index()
  {
    return view('spa');
  }

  public function admin ()
  {
    return view('admin_spa');
  }

  public function email(): CreateOrderForAdmin
  {
    $order = Order::with(['products'])->first();
    $user = User::first();
    return (new CreateOrderForAdmin($order, $user));
  }
}
