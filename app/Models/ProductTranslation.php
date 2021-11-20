<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\ProductTranslation
 *
 * @property int    $id
 * @property int    $product_id
 * @property string $locale
 * @property string $name
 * @property string $description
 * @method static Builder|ProductTranslation newModelQuery()
 * @method static Builder|ProductTranslation newQuery()
 * @method static Builder|ProductTranslation query()
 * @method static Builder|ProductTranslation whereDescription($value)
 * @method static Builder|ProductTranslation whereId($value)
 * @method static Builder|ProductTranslation whereLocale($value)
 * @method static Builder|ProductTranslation whereName($value)
 * @method static Builder|ProductTranslation whereProductId($value)
 * @mixin Eloquent
 */
class ProductTranslation extends Model
{
  use HasFactory;

  public $timestamps = false;
  protected $fillable = [
    'name',
    'description',
  ];
}
