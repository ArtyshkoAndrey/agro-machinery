<?php

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Database\Factories\ManufacturerFactory;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\Manufacturer
 *
 * @property int               $id
 * @property string            $name
 * @property Carbon|null       $created_at
 * @property Carbon|null       $updated_at
 * @property-read Product|null $products
 * @method static ManufacturerFactory factory(...$parameters)
 * @method static Builder|Manufacturer newModelQuery()
 * @method static Builder|Manufacturer newQuery()
 * @method static Builder|Manufacturer query()
 * @method static Builder|Manufacturer whereCreatedAt($value)
 * @method static Builder|Manufacturer whereId($value)
 * @method static Builder|Manufacturer whereName($value)
 * @method static Builder|Manufacturer whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Manufacturer extends Model
{
  use HasFactory;

  /**
   * @var string[]
   */
  protected $fillable = [
    'name',
  ];

  public function products_count(): int
  {
    return $this->products()->count();
  }

  public function products(): HasOne
  {
    return $this->hasOne(Product::class, 'manufacturer_id', 'id');
  }
}
