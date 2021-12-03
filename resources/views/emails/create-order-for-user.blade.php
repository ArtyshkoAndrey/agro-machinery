@component('mail::message')
# {{ __('Hello!') }} {{ $order->name }}

{{ __('email-create-order-for-user.body', ['url' => url('/')]) }}

@component('mail::table')
  |  | {{ __('email-create-order-for-user.tables.products.name') }} | {{ __('email-create-order-for-user.tables.products.cost') }} |
  | :------------- | :------------- | --------: |
  @foreach($order->products as $product)
    | ![{{ $product->image->name }}]({{ $product->image->uri . '?w=100&h=auto&fit=crop&fm=webp' }} "Title") | {{ $product->name }} | **{{ $product->cost }} ₸** |
  @endforeach
@endcomponent

@component('mail::table')
  | {{ __('email-create-order-for-user.tables.cost.amount') }} |
  | -------------: |
  | **{{ $order->cost }} ₸** |
@endcomponent

{{ __('Thanks!') }}<br>
{{ config('app.name') }}
@endcomponent
