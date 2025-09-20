<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;


// Ruta principal
Route::get('/', function () {
    return view('welcome');
});

// Rutas de autenticación
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:sanctum')->get('/me', [AuthController::class, 'me']);
Route::middleware('auth:sanctum')->post('/logout', [AuthController::class, 'logout']);
// Rutas protegidas por roles - Servir vistas React
Route::middleware(['auth:sanctum'])->group(function () {
    Route::middleware(['role:estudiante'])->group(function () {
        Route::get('/dashboard/estudiante', function () {
            return view('dashboard', ['role' => 'estudiante']);
        });
    });
    Route::middleware(['role:profesor'])->group(function () {
        Route::get('/dashboard/profesor', function () {
            return view('dashboard', ['role' => 'profesor']);
        });
    });
    // Dashboard Rector (acceso a todo)
    Route::middleware(['role:rector'])->group(function () {
        Route::get('/dashboard/rector', function () {
            return view('dashboard', ['role' => 'rector']);
        });
    });
    
    // Dashboard Coordinadora
    Route::middleware(['role:coordinadora'])->group(function () {
        Route::get('/dashboard/coordinadora', function () {
            return view('dashboard', ['role' => 'coordinadora']);
        });
    });
    
    // Dashboard Secretaria
    Route::middleware(['role:secretaria'])->group(function () {
        Route::get('/dashboard/secretaria', function () {
            return view('dashboard', ['role' => 'secretaria']);
        });
    });
});