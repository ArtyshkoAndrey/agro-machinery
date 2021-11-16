<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCategoriesTable extends Migration
{
  /**
   * Run the migrations.
   *
   * @return void
   */
  public function up(): void
  {
    Schema::create('categories', function (Blueprint $table) {
      $table->id();
      $table->boolean('to_index')->default(false);
      $table->text('image');
      $table->timestamps();
    });

    Schema::create('category_translations', function (Blueprint $table) {
      $table->id();
      $table->foreignId('category_id')
        ->constrained('categories')
        ->onDelete('cascade')
        ->onUpdate('cascade');
      $table->string('locale')->index();

      $table->string('name');
      $table->text('description')->nullable();

      $table->unique(['category_id', 'locale']);
    });
  }

  /**
   * Reverse the migrations.
   *
   * @return void
   */
  public function down(): void
  {
    Schema::dropIfExists('category_translations');
    Schema::dropIfExists('categories');
  }
}
