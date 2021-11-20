<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductsTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(): void
  {
    Schema::create('products', function (Blueprint $table) {
      $table->id();
      $table->boolean('new')->default(false);
      $table->boolean('popular')->default(false);
      $table->foreignId('category_id')
        ->constrained('categories')
        ->cascadeOnDelete()
        ->cascadeOnUpdate();
      $table->integer('cost');
      $table->timestamp('deleted_at');
      $table->timestamps();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(): void
  {
    Schema::dropIfExists('products');
  }
}
