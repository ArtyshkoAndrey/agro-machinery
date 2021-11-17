<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\CategoryTranslation
 *
 * @property int         $id
 * @property int         $category_id
 * @property string      $locale
 * @property string      $name
 * @property string|null $description
 * @method static Builder|CategoryTranslation newModelQuery()
 * @method static Builder|CategoryTranslation newQuery()
 * @method static Builder|CategoryTranslation query()
 * @method static Builder|CategoryTranslation whereCategoryId($value)
 * @method static Builder|CategoryTranslation whereDescription($value)
 * @method static Builder|CategoryTranslation whereId($value)
 * @method static Builder|CategoryTranslation whereLocale($value)
 * @method static Builder|CategoryTranslation whereName($value)
 * @mixin Eloquent
 */
class CategoryTranslation extends Model
{
  use HasFactory;

  public $timestamps = false;
  protected $fillable = [
    'name',
    'description',
  ];
}
