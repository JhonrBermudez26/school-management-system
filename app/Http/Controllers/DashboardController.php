<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function estudiante(Request $request)
    {
        return view('dashboards.estudiante', [
            'user' => $request->user()
        ]);
    }

    public function profesor(Request $request)
    {
        return view('dashboards.profesor', [
            'user' => $request->user()
        ]);
    }

    public function rector(Request $request)
    {
        return view('dashboards.rector', [
            'user' => $request->user()
        ]);
    }

    public function coordinadora(Request $request)
    {
        return view('dashboards.coordinadora', [
            'user' => $request->user()
        ]);
    }

    public function secretaria(Request $request)
    {
        return view('dashboards.secretaria', [
            'user' => $request->user()
        ]);
    }
}