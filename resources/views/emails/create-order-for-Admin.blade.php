@component('mail::message')
  # {{ __('Hello!') }} {{ $user->name }}

  {{ __('email-create-order-for-admin.body', ['url' => url('/')]) }}

  * **{{ __('email-create-order-for-admin.name') }}:** {{ $order->name }}
  * **{{ __('email-create-order-for-admin.email') }}:** {{ $order->email }}
  * **{{ __('email-create-order-for-admin.phone') }}:** {{ $order->phone }}

  @component('mail::table')
    |  | {{ __('email-create-order-for-admin.tables.products.name') }} | {{ __('email-create-order-for-admin.tables.products.cost') }} |
    | :------------- | :------------- | --------: |
    @foreach($order->products as $product)
      | ![{{ $product->image->name }}]({{ $product->image->uri . '?w=100&h=auto&fit=crop&fm=webp' }} "Title") | {{ $product->name }} | **{{ $product->cost }} ₸** |
    @endforeach
  @endcomponent

  @component('mail::table')
    | {{ __('email-create-order-for-admin.tables.cost.amount') }} |
    | -------------: |
    | **{{ $order->cost }} ₸** |
  @endcomponent

  @component('mail::button', ['url' => url('admin/orders/show/' . $order->id)])
    {{ __('email-create-order-for-admin.button.show-order') }}
  @endcomponent

  {{ __('Thanks!') }}<br>
  {{ config('app.name') }}
@endcomponent
