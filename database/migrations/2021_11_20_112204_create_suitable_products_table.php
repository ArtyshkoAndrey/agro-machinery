<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSuitableProductsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(): void
  {
    Schema::create('suitable_products', function (Blueprint $table) {
      $table->id();
      $table->foreignId('product_id')
        ->constrained('products')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();

      $table->foreignId('suite_id')
        ->constrained('products')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(): void
  {
    Schema::dropIfExists('suitable_products');
  }
}
