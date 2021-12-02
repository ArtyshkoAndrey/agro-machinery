<?php

namespace App\Models;

use Eloquent;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\AttributeTranslation
 *
 * @property int         $id
 * @property int         $attribute_id
 * @property string      $locale
 * @property string      $name
 * @property string|null $created_at
 * @property string|null $updated_at
 * @method static Builder|AttributeTranslation newModelQuery()
 * @method static Builder|AttributeTranslation newQuery()
 * @method static Builder|AttributeTranslation query()
 * @method static Builder|AttributeTranslation whereAttributeId($value)
 * @method static Builder|AttributeTranslation whereCreatedAt($value)
 * @method static Builder|AttributeTranslation whereId($value)
 * @method static Builder|AttributeTranslation whereLocale($value)
 * @method static Builder|AttributeTranslation whereName($value)
 * @method static Builder|AttributeTranslation whereUpdatedAt($value)
 * @mixin Eloquent
 */
class AttributeTranslation extends Model
{
  use HasFactory;

  public $timestamps = false;
  protected $fillable = [
    'name',
  ];
}
