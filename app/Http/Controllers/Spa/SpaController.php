<?php

namespace App\Http\Controllers\Spa;

use App\Http\Controllers\Controller;

class SpaController extends Controller
{
  public function index()
  {
    return view('spa');
  }

  public function admin ()
  {
    return view('admin_spa');
  }
}
