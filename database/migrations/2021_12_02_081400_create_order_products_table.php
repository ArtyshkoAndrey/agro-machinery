<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOrderProductsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('order_products', function (Blueprint $table) {
      $table->id();

      $table->foreignId('order_id')
        ->constrained('orders')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();

      $table->foreignId('product_id')
        ->constrained('products')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();

      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::dropIfExists('order_products');
  }
}
