# 🎓 School Management System

Sistema de gestión escolar desarrollado con **Laravel**, **React**, **MySQL** y **Tailwind CSS**.  
El objetivo es ofrecer una plataforma web moderna para administrar estudiantes, cursos, profesores y procesos académicos de manera eficiente.

---

## 🚀 Tecnologías utilizadas

- **Backend:** [Laravel 11](https://laravel.com/)  
- **Frontend:** [React 18](https://react.dev/) con [Vite](https://vitejs.dev/)  
- **Base de datos:** MySQL  
- **Estilos:** [Tailwind CSS 4](https://tailwindcss.com/)  
- **Servidor local:** XAMPP (Apache + MySQL)  

---

## 📂 Estructura del proyecto

school-management-system/
│
├── app/ # Lógica de Laravel (modelos, controladores, etc.)
├── database/ # Migraciones y seeders
├── public/ # Archivos públicos (index.php, assets compilados)
├── resources/
│ ├── js/ # Código React (componentes, páginas, layouts)
│ │ ├── App.jsx
│ │ └── Pages/
│ └── views/ # Vistas Blade (ej. welcome.blade.php)
├── routes/ # Definición de rutas (web.php, api.php)
├── package.json # Configuración de React/Vite
├── vite.config.js # Configuración de Vite
└── README.md



---

## ⚙️ Instalación y configuración

### 1️⃣ Clonar el repositorio

git clone https://github.com/JhonrBermudez26/school-management-system.git
cd school-management-system


### 2️⃣ Instalar dependencias de Laravel
composer install

### 3️⃣ Instalar dependencias de React/Vite
npm install

### 4️⃣ Configurar archivo .env
cp .env.example .env

Configura tu conexión a base de datos:
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=school_db
DB_USERNAME=root
DB_PASSWORD=

### 5️⃣ Generar la clave de Laravel
php artisan key:generate

### 6️⃣ Ejecutar migraciones
php artisan migrate

### 7️⃣ Levantar servidores de desarrollo
php artisan serve

En otra terminal:
npm run dev

✍️ Autor: Jhon Deivis Rivas Bermúdez

📅 Año: 2025