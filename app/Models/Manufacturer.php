<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Manufacturer extends Model
{
  use HasFactory;

  /**
   * @var string[]
   */
  protected $fillable = [
    'name',
  ];

  public function products(): HasOne
  {
    return $this->hasOne(Product::class, 'manufacturer_id', 'id');
  }

  public function products_count (): int
  {
    return $this->products()->count();
  }
}