<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Barryvdh\LaravelIdeHelper\IdeHelperServiceProvider;

class AppServiceProvider extends ServiceProvider
{

  /**
   * Register any application services.
   *
   * @return void
   */
  public function register (): void
  {
    if ($this->app->isLocal()) {
      $this->app->register(IdeHelperServiceProvider::class);
    }
  }

  /**
   * Bootstrap any application services.
   *
   * @return void
   */
  public function boot ()
  {
    //
  }
}
