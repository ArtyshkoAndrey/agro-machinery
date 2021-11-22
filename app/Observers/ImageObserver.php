<?php

namespace App\Observers;

use App\Models\Image;
use Illuminate\Support\Facades\File;

class ImageObserver
{
  /**
   * Handle the Image "created" event.
   *
   * @param Image $image
   *
   * @return void
   */
  public function created(Image $image): void
  {
    //
  }

  /**
   * Handle the Image "updated" event.
   *
   * @param Image $image
   *
   * @return void
   */
  public function updated(Image $image): void
  {
    //
  }

  /**
   * Handle the Image "deleted" event.
   *
   * @param Image $image
   *
   * @return void
   */
  public function deleted(Image $image): void
  {
    File::delete('public/' . $image->path);
  }

  /**
   * Handle the Image "restored" event.
   *
   * @param Image $image
   *
   * @return void
   */
  public function restored(Image $image): void
  {
    //
  }

  /**
   * Handle the Image "force deleted" event.
   *
   * @param Image $image
   *
   * @return void
   */
  public function forceDeleted(Image $image): void
  {
    //
  }
}
