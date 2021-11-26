<?php

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use App\Traits\Models\HasImage;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;

/**
 * App\Models\Category
 *
 * @property int                                   $id
 * @property int                                   $to_index
 * @property Carbon|null                           $created_at
 * @property Carbon|null                           $updated_at
 * @property-read CategoryTranslation|null         $translation
 * @property-read Collection|CategoryTranslation[] $translations
 * @property-read int|null                         $translations_count
 * @property-read Collection|Image[]               $images
 * @property-read int|null                         $images_count
 * @property-read Collection|Category[]            $child
 * @property-read int|null                         $child_count
 * @property-read Image                            $image
 * @property-read Collection|Category[]            $parents
 * @property-read int|null                         $parents_count
 * @property-read Collection|Product[]             $products
 * @property-read int|null                         $products_count
 * @method static Builder|Category listsTranslations(string $translationField)
 * @method static Builder|Category newModelQuery()
 * @method static Builder|Category newQuery()
 * @method static Builder|Category notTranslatedIn(?string $locale = null)
 * @method static Builder|Category orWhereTranslation(string $translationField, $value, ?string $locale = null)
 * @method static Builder|Category orWhereTranslationLike(string $translationField, $value, ?string $locale = null)
 * @method static Builder|Category orderByTranslation(string $translationField, string $sortMethod = 'asc')
 * @method static Builder|Category query()
 * @method static Builder|Category translated()
 * @method static Builder|Category translatedIn(?string $locale = null)
 * @method static Builder|Category whereCreatedAt($value)
 * @method static Builder|Category whereId($value)
 * @method static Builder|Category whereImage($value)
 * @method static Builder|Category whereToIndex($value)
 * @method static Builder|Category whereTranslation(string $translationField, $value, ?string $locale = null, string $method = 'whereHas', string $operator = '=')
 * @method static Builder|Category whereTranslationLike(string $translationField, $value, ?string $locale = null)
 * @method static Builder|Category whereUpdatedAt($value)
 * @method static Builder|Category withTranslation()
 * @mixin Eloquent
 */
class Category extends Model implements TranslatableContract
{
  use HasFactory;
  use Translatable;
  use HasImage;

  public array $translatedAttributes = [
    'name',
    'description',
  ];

  protected $fillable = [
    'to_index',
  ];

  protected $casts = [
    'to_index' => 'boolean',
  ];

  protected $with = [
    'image',
  ];

  /**
   * Parent Categories
   *
   * @return BelongsToMany
   */
  public function parents(): BelongsToMany
  {
    return $this->belongsToMany(
      Category::class,
      'category_categories',
      'child_category_id',
      'category_id'
    );
  }

  /**
   * Products in category
   *
   * @return HasMany
   */
  public function products(): HasMany
  {
    return $this->hasMany(
      Product::class
    );
  }

  public function countProducts()
  {
    return $this->products->count() + $this->child()->withCount('products')->get()->sum('products_count');
  }

  /**
   * Child Categories
   *
   * @return BelongsToMany
   */
  public function child(): BelongsToMany
  {
    return $this->belongsToMany(
      Category::class,
      'category_categories',
      'category_id',
      'child_category_id'
    );
  }
}
