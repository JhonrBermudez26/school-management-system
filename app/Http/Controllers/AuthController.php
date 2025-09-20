<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (!Auth::attempt($credentials)) {
            return response()->json(['message' => 'Credenciales incorrectas'], 401);
        }

        $user = Auth::user();

        return response()->json([
            'access_token' => $user->createToken('auth_token')->plainTextToken,
            'token_type' => 'Bearer',
            'user' => $user,
            'redirect' => $this->redirectByRole($user->role)
        ]);
    }

    private function redirectByRole($role)
    {
        return match ($role) {
            'profesor' => '/profesor/dashboard',
            'estudiante' => '/estudiante/dashboard',
            'secretaria' => '/secretaria/dashboard',
            'coordinadora' => '/coordinadora/dashboard',
            'rector' => '/rector/dashboard',
            default => '/home'
        };
    }
}
