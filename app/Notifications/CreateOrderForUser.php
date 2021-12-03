<?php

namespace App\Notifications;

use App\Models\Order;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class CreateOrderForUser extends Notification
{
  use Queueable;

  protected Order $order;

  /**
   * Create a new notification instance.
   *
   * @return void
   */
  public function __construct($order)
  {
    $this->order = $order;
  }

  /**
   * Get the notification's delivery channels.
   *
   * @param mixed $notifiable
   *
   * @return array
   */
  public function via($notifiable): array
  {
    return ['mail'];
  }

  /**
   * Get the mail representation of the notification.
   *
   * @param mixed $notifiable
   *
   * @return \App\Mail\CreateOrderForUser
   */
  public function toMail($notifiable): \App\Mail\CreateOrderForUser
  {
    return (new \App\Mail\CreateOrderForUser($this->order));
  }

  /**
   * Get the array representation of the notification.
   *
   * @param mixed $notifiable
   *
   * @return array
   */
  public function toArray($notifiable): array
  {
    return [
      //
    ];
  }
}
