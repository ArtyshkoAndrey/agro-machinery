<?php

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use App\Traits\Models\HasImage;
use Illuminate\Database\Eloquent\Model;
use Astrotomic\Translatable\Translatable;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Astrotomic\Translatable\Contracts\Translatable as TranslatableContract;

/**
 * App\Models\Category
 *
 * @property int                                   $id
 * @property int                                   $to_index
 * @property string                                $image
 * @property Carbon|null                           $created_at
 * @property Carbon|null                           $updated_at
 * @property-read CategoryTranslation|null         $translation
 * @property-read Collection|CategoryTranslation[] $translations
 * @property-read int|null                         $translations_count
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
 * @property-read Collection|Image[] $images
 * @property-read int|null           $images_count
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
    'image',
    'to_index',
  ];

  protected $casts = [
    'to_index' => 'boolean'
  ];
}
