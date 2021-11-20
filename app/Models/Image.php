<?php
/*
 * Copyright (c) 2021.
 * This program code was developed by web developer Fulliton.
 * VK:                   vk.com/fulliton
 * Email address: fullerton@vk.com
 */

namespace App\Models;

use Eloquent;
use Illuminate\Support\Carbon;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;

/**
 * App\Models\Image
 *
 * @property int                             $id
 * @property string                          $name
 * @property string                          $path
 * @property int                             $order
 * @property string|null                     $model_type
 * @property int|null                        $model_id
 * @property Carbon|null $created_at
 * @property Carbon|null $updated_at
 * @property-read array|string|string[]      $uri
 * @method static Builder|Image newModelQuery()
 * @method static Builder|Image newQuery()
 * @method static Builder|Image query()
 * @method static Builder|Image whereCreatedAt($value)
 * @method static Builder|Image whereId($value)
 * @method static Builder|Image whereModelId($value)
 * @method static Builder|Image whereModelType($value)
 * @method static Builder|Image whereName($value)
 * @method static Builder|Image whereOrder($value)
 * @method static Builder|Image wherePath($value)
 * @method static Builder|Image whereUpdatedAt($value)
 * @mixin Eloquent
 */
class Image extends Model
{
  use HasFactory;

  /**
   * @var string
   */
  public const DEFAULT = 'storage/placeholder/test_product.png';

  /**
   * @var string
   */
  protected static string $orderDirection = 'ASC';

  /**
   * @var string[]
   */
  protected $fillable = [
    'name',
    'path',
    'order',
  ];

  /**
   * @var string[]
   */
  protected $appends = [
    'path',
  ];

  /**
   * @param string $value
   *
   * @return array|string|string[]
   */
  public function getUriAttribute(string $value)
  {
    return str_replace('storage', 'image', $value);
  }
}
