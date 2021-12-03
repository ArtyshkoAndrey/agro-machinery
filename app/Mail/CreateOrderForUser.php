<?php

namespace App\Mail;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class CreateOrderForUser extends Mailable
{
  use Queueable, SerializesModels;
  protected Order $order;
  /**
   * Create a new message instance.
   *
   * @return void
   */
  public function __construct(Order $order)
  {
    $this->order = $order;
    $this->order->load(['products']);
  }

  /**
   * Build the message.
   *
   * @return $this
   */
  public function build(): CreateOrderForUser
  {
    return $this->markdown('emails.create-order-for-user', [
      'order' => $this->order
    ]);
  }
}
