<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddColumnCategoryProductTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {

    Schema::table('products', function (Blueprint $table) {
      $table->dropConstrainedForeignId('category_id');
      $table->dropConstrainedForeignId('manufacturer_id');
    });

    Schema::table('products', function (Blueprint $table) {
      $table->foreignId('category_id')
        ->nullable()
        ->constrained('categories')
        ->nullOnDelete()
        ->cascadeOnUpdate();

      $table->foreignId('manufacturer_id')
        ->nullable()
        ->constrained('manufacturers')
        ->nullOnDelete()
        ->cascadeOnUpdate();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    //
  }
}
