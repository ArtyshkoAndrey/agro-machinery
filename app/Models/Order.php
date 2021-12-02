<?php

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

/**
 * App\Models\Order
 *
 * @property int                       $id
 * @property string                    $email
 * @property string                    $name
 * @property string                    $phone
 * @property string                    $cost
 * @property Carbon|null               $created_at
 * @property Carbon|null               $updated_at
 * @property-read Collection|Product[] $products
 * @property-read int|null             $products_count
 * @method static Builder|Order newModelQuery()
 * @method static Builder|Order newQuery()
 * @method static Builder|Order query()
 * @method static Builder|Order whereCost($value)
 * @method static Builder|Order whereCreatedAt($value)
 * @method static Builder|Order whereEmail($value)
 * @method static Builder|Order whereId($value)
 * @method static Builder|Order whereName($value)
 * @method static Builder|Order wherePhone($value)
 * @method static Builder|Order whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Order extends Model
{
  use HasFactory;

  protected $fillable = [
    'email',
    'name',
    'phone',
    'cost'
  ];

  public function products(): BelongsToMany
  {
    return $this->belongsToMany(Product::class, 'order_products');
  }
}
