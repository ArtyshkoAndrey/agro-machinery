<?php

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;

/**
 * App\Models\Attribute
 *
 * @property int                                    $id
 * @property Carbon|null                            $created_at
 * @property Carbon|null                            $updated_at
 * @property-read Collection|Product[]              $products
 * @property-read int|null                          $products_count
 * @property-read AttributeTranslation|null         $translation
 * @property-read Collection|AttributeTranslation[] $translations
 * @property-read int|null                          $translations_count
 * @method static Builder|Attribute listsTranslations(string $translationField)
 * @method static Builder|Attribute newModelQuery()
 * @method static Builder|Attribute newQuery()
 * @method static Builder|Attribute notTranslatedIn(?string $locale = null)
 * @method static Builder|Attribute orWhereTranslation(string $translationField, $value, ?string $locale = null)
 * @method static Builder|Attribute orWhereTranslationLike(string $translationField, $value, ?string $locale = null)
 * @method static Builder|Attribute orderByTranslation(string $translationField, string $sortMethod = 'asc')
 * @method static Builder|Attribute query()
 * @method static Builder|Attribute translated()
 * @method static Builder|Attribute translatedIn(?string $locale = null)
 * @method static Builder|Attribute whereCreatedAt($value)
 * @method static Builder|Attribute whereId($value)
 * @method static Builder|Attribute whereTranslation(string $translationField, $value, ?string $locale = null, string $method = 'whereHas', string $operator = '=')
 * @method static Builder|Attribute whereTranslationLike(string $translationField, $value, ?string $locale = null)
 * @method static Builder|Attribute whereUpdatedAt($value)
 * @method static Builder|Attribute withTranslation()
 * @mixin Eloquent
 */
class Attribute extends Model implements TranslatableContract
{
  use HasFactory;
  use Translatable;

  public array $translatedAttributes = [
    'name',
  ];

  public function products(): BelongsToMany
  {
    return $this->belongsToMany(Product::class, 'product_attributes');
  }
}
