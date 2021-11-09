<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use App\Exceptions\VerifyEmailException;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Validation\ValidationException;
use Illuminate\Foundation\Auth\AuthenticatesUsers;

class LoginController extends Controller
{
  use AuthenticatesUsers;

  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('guest')->except('logout');
  }

  /**
   * Log the user out of the application.
   *
   * @param Request $request
   *
   * @return void
   */
  public function logout(Request $request): void
  {
    $this->guard()->logout();
  }

  /**
   * Attempt to log the user into the application.
   *
   * @param Request $request
   *
   * @return bool
   */
  protected function attemptLogin(Request $request): bool
  {
    $token = $this->guard()->attempt($this->credentials($request));

    if (!$token) {
      return false;
    }

    $user = $this->guard()->user();
    if ($user instanceof MustVerifyEmail && !$user->hasVerifiedEmail()) {
      return false;
    }

    $this->guard()->setToken($token);

    return true;
  }

  /**
   * Send the response after the user was authenticated.
   *
   * @param Request $request
   *
   * @return JsonResponse
   */
  protected function sendLoginResponse(Request $request): JsonResponse
  {
    $this->clearLoginAttempts($request);

    $token = (string)$this->guard()->getToken();
    $expiration = $this->guard()->getPayload()->get('exp');

    return response()->json([
      'token' => $token,
      'token_type' => 'bearer',
      'expires_in' => $expiration - time(),
    ]);
  }

  /**
   * Get the failed login response instance.
   *
   * @param Request $request
   *
   * @return void
   *
   * @throws ValidationException
   */
  protected function sendFailedLoginResponse(Request $request): void
  {
    $user = $this->guard()->user();
    if ($user instanceof MustVerifyEmail && !$user->hasVerifiedEmail()) {
      throw VerifyEmailException::forUser($user);
    }

    throw ValidationException::withMessages([
      $this->username() => [trans('auth.failed')],
    ]);
  }
}
