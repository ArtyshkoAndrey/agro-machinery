<?php

namespace App\Observers;

use App\Models\Order;

class OrderObserver
{
  /**
   *
   * @param Order $order
   *
   * @return void
   */
  public function created(Order $order): void
  {
//    Mail::to($order->email)->send(new CreateOrderForUser($order));
  }

  /**
   *
   * @param Order $order
   *
   * @return void
   */
  public function updated(Order $order): void
  {
    //
  }

  /**
   *
   * @param @param Order $order
   *
   * @return void
   */
  public function deleted(Order $order): void
  {

  }

  /**
   *
   * @param Order $order
   *
   * @return void
   */
  public function restored(Order $order): void
  {
    //
  }

  /**
   *
   * @param Order $order
   *
   * @return void
   */
  public function forceDeleted(Order $order): void
  {
    //
  }
}
