<?php

namespace App\Http\Controllers\Auth\Dashboard;

use Hash;
use App\Models\Manufacturer;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Helpers\JsonResponse;
use App\Http\Controllers\Controller;

class ManufacturerController extends Controller
{
  /**
   * Display a listing of the resource.
   *
   * @param Request $request
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function index(Request $request): \Illuminate\Http\JsonResponse
  {
    $query = Manufacturer::query();

    $query = $query->orderByDesc('updated_at');

    if (($search = $request->get('search', '')) !== '') {
      $query = $query->where('name', 'like', "%{$search}%");
    }

    $paginate = $request->get('per_page', null);
    if ($paginate) {
      $manufacturers = $query->paginate($paginate);
    } else {
      $manufacturers = $query->get();
    }

    return JsonResponse::success(['manufacturers' => $manufacturers]);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param Request $request
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function store(Request $request): \Illuminate\Http\JsonResponse
  {
    $request->validate(['name' => 'required|string',]);
    $manufacturer = new Manufacturer($request->all());
    $manufacturer->save();

    return JsonResponse::success(['manufacturer' => $manufacturer]);
  }

  /**
   * Display the specified resource.
   *
   * @param Manufacturer $manufacturer
   *
   * @return Response
   */
  public function show(Manufacturer $manufacturer)
  {

  }

  /**
   * Update the specified resource in storage.
   *
   * @param Request      $request
   * @param Manufacturer $manufacturer
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function update(Request $request, Manufacturer $manufacturer): \Illuminate\Http\JsonResponse
  {
    $request->validate(['name' => 'required|string']);

    $manufacturer->update($request->all());
    $manufacturer->save();

    return JsonResponse::success(['manufacturers' => $manufacturer]);
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param Manufacturer $manufacturer
   *
   * @return \Illuminate\Http\JsonResponse
   */
  public function destroy(Manufacturer $manufacturer): \Illuminate\Http\JsonResponse
  {
    $manufacturer->delete();

    return JsonResponse::success(['manufacturer' => $manufacturer]);
  }
}
