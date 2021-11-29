<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateProductAttributesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::create('product_attributes', function (Blueprint $table) {
      $table->id();

      $table->foreignId('product_id')
        ->constrained('products')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();

      $table->foreignId('attribute_id')
        ->constrained('attributes')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();

      $table->string('value');

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
    Schema::dropIfExists('product_attributes');
  }
}
