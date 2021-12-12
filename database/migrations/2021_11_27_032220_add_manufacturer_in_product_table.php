<?php

use App\Models\Product;
use App\Models\Manufacturer;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddManufacturerInProductTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up()
  {
    Schema::table('products', function (Blueprint $table) {
      $table->foreignId('manufacturer_id')
        ->nullable()
        ->after('cost')
        ->constrained('manufacturers')
        ->cascadeOnUpdate()
        ->cascadeOnDelete();
    });

    if (Product::all()->count() > 0) {
      Product::query()->update(['manufacturer_id' => Manufacturer::first()->id]);
    }

    Schema::table('products', function (Blueprint $table) {
      $table->foreignId('manufacturer_id')
        ->nullable(false)
        ->after('cost')
        ->change();
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down()
  {
    Schema::table('products', function (Blueprint $table) {
      $table->dropForeign('products_manufacturer_id_foreign');
      $table->dropColumn(['manufacturer_id']);
    });
  }
}
