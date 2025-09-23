<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function estudiante(Request $request)
    {
        return view('estudiante.dashboards', [
            'user' => $request->user()
        ]);
    }

    public function profesor(Request $request)
    {
        return view('profesor.dashboards', [
            'user' => $request->user()
        ]);
    }

    public function rector(Request $request)
    {
        return view('rector.dashboards', [
            'user' => $request->user()
        ]);
    }

    public function coordinadora(Request $request)
    {
        return view('coordinadora.dashboards', [
            'user' => $request->user()
        ]);
    }

    public function secretaria(Request $request)
    {
        return view('secretaria.dashboards', [
            'user' => $request->user()
        ]);
    }
}