// filepath: c:\xampp\htdocs\school-management-system\resources\js\components\RegisterForm.jsx
import React from 'react';

function RegisterForm() {
    return (
        <form className="p-3">
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre Completo</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="name" 
                    placeholder="Juan Pérez"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="registerEmail" className="form-label">Correo Electrónico</label>
                <input 
                    type="email" 
                    className="form-control" 
                    id="registerEmail" 
                    placeholder="nombre@ejemplo.com"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="registerPassword" className="form-label">Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="registerPassword" 
                />
            </div>
            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                <input 
                    type="password" 
                    className="form-control" 
                    id="confirmPassword" 
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                    Acepto los términos y condiciones
                </label>
            </div>
            <div className="d-grid">
                <button type="submit" className="btn btn-primary">Registrarse</button>
            </div>
        </form>
    );
}

export default RegisterForm;