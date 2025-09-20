<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class CheckRole
{
    public function handle(Request $request, Closure $next, ...$roles)
    {
        if (!$request->user() || !$request->user()->hasAnyRole($roles)) {
            \Log::warning('Intento de acceso no autorizado', [
                'user_id' => $request->user()->id ?? null,
                'role'    => $request->user()->role ?? null,
                'ruta'    => $request->path(),
            ]);

            return response()->json(['message' => 'No autorizado para este recurso'], 403);
        }

        return $next($request);
    }
}
