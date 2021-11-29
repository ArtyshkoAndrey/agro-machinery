<?php

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use App\Traits\Models\HasImage;
use Illuminate\Database\Query\Builder;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;

/**
 * App\Models\Product
 *
 * @property int                                  $id
 * @property bool                                 $new
 * @property bool                                 $popular
 * @property int                                  $category_id
 * @property int                                  $cost
 * @property Carbon                               $deleted_at
 * @property Carbon|null                          $created_at
 * @property Carbon|null                          $updated_at
 * @property-read Category                        $category
 * @property-read Image                           $image
 * @property-read Collection|Image[]              $images
 * @property-read int|null                        $images_count
 * @property-read ProductTranslation|null         $translation
 * @property-read Collection|ProductTranslation[] $translations
 * @property-read int|null                        $translations_count
 * @method static \Illuminate\Database\Eloquent\Builder|Product listsTranslations(string $translationField)
 * @method static \Illuminate\Database\Eloquent\Builder|Product newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Product notTranslatedIn(?string $locale = null)
 * @method static Builder|Product onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Product orWhereTranslation(string $translationField, $value, ?string $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Product orWhereTranslationLike(string $translationField, $value, ?string $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Product orderByTranslation(string $translationField, string $sortMethod = 'asc')
 * @method static \Illuminate\Database\Eloquent\Builder|Product query()
 * @method static \Illuminate\Database\Eloquent\Builder|Product translated()
 * @method static \Illuminate\Database\Eloquent\Builder|Product translatedIn(?string $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCategoryId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereNew($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product wherePopular($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereTranslation(string $translationField, $value, ?string $locale = null, string $method = 'whereHas', string $operator = '=')
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereTranslationLike(string $translationField, $value, ?string $locale = null)
 * @method static \Illuminate\Database\Eloquent\Builder|Product whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Product withTranslation()
 * @method static Builder|Product withTrashed()
 * @method static Builder|Product withoutTrashed()
 * @mixin Eloquent
 * @property-read Collection|Product[] $suitable
 * @property-read int|null $suitable_count
 */
class Product extends Model implements TranslatableContract
{
  use HasFactory;
  use Translatable;
  use HasImage;

  public array $translatedAttributes = [
    'name',
    'description',
  ];

  protected $fillable = [
    'new',
    'popular',
    'cost',
  ];

  protected $casts = [
    'new' => 'boolean',
    'popular' => 'boolean',
  ];

  public function category(): BelongsTo
  {
    return $this->belongsTo(Category::class, 'category_id', 'id');
  }
  public function manufacturer(): BelongsTo
  {
    return $this->belongsTo(Manufacturer::class, 'manufacturer_id', 'id');
  }

  public function suitable (): BelongsToMany
  {
    return $this->belongsToMany(self::class, 'suitable_products', 'product_id', 'suite_id');
  }

  public function attributes (): BelongsToMany
  {
    return $this
      ->belongsToMany(Attribute::class, 'product_attributes')
      ->withPivot('value');
  }
}
