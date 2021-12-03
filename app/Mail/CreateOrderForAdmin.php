<?php

namespace App\Mail;

use App\Models\User;
use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CreateOrderForAdmin extends Mailable
{
  use Queueable, SerializesModels;

  protected Order $order;
  protected User $user;

  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(Order $order, User $user)
  {
    $this->order = $order;
    $this->user = $user;
    $this->order->load(['products']);
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): CreateOrderForAdmin
  {
    return $this->markdown('emails.create-order-for-Admin', [
      'order' => $this->order,
      'user' => $this->user
    ])->subject('Поступил новый заказ');
  }
}
