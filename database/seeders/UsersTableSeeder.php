<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;
use Illuminate\Support\Facades\Hash;

class UsersTableSeeder extends Seeder
{
    public function run()
    {
        // Administrador
        User::create([
            'name' => 'Administrador Sistema',
            'email' => 'admin@sistema.com',
            'password' => Hash::make('admin123'),
            'role' => 'admin'
        ]);

        // Secretaria
        User::create([
            'name' => 'Secretaria Sistema',
            'email' => 'secretaria@sistema.com',
            'password' => Hash::make('secretaria123'),
            'role' => 'secretaria'
        ]);

        // Profesor
        User::create([
            'name' => 'Profesor Demo',
            'email' => 'profesor@sistema.com',
            'password' => Hash::make('profesor123'),
            'role' => 'profesor'
        ]);

        // Alumno
        User::create([
            'name' => 'Alumno Demo',
            'email' => 'alumno@sistema.com',
            'password' => Hash::make('alumno123'),
            'role' => 'alumno'
        ]);
    }
}