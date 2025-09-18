// filepath: c:\xampp\htdocs\school-management-system\resources\js\components\LoginForm.jsx
import React from 'react';

function LoginForm() {
    return (
        <form className="p-3">
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="email" 
                    placeholder="nombre@ejemplo.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="password" 
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="remember" />
                <label className="form-check-label" htmlFor="remember">Recordarme</label>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
            </div>
        </form>
    );
}

export default LoginForm;