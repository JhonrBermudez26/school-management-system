import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.post('http://localhost:8000/api/login', {
                email,
                password,
            });
            localStorage.setItem('token', response.data.access_token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            window.location.href = '/dashboard';
        } catch (err) {
            setError('Credenciales inválidas');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="card border-0 shadow">
            <div className="card-body p-5">
                <div className="text-center mb-4">
                    <i className="bi bi-person-circle text-primary" style={{ fontSize: '3rem' }}></i>
                    <h4 className="mt-2">Bienvenido</h4>
                    <p className="text-muted">Ingresa tus credenciales para continuar</p>
                </div>

                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <i className="bi bi-exclamation-triangle-fill me-2"></i>
                            {error}
                            <button type="button" className="btn-close" onClick={() => setError('')}></button>
                        </div>
                    )}

                    <div className="form-floating mb-3">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="nombre@ejemplo.com"
                            required
                        />
                        <label htmlFor="email">Correo Electrónico</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Contraseña"
                            required
                        />
                        <label htmlFor="password">Contraseña</label>
                    </div>

                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" id="remember" />
                            <label className="form-check-label" htmlFor="remember">Recordarme</label>
                        </div>
                        <a href="#" className="text-primary text-decoration-none">¿Olvidaste tu contraseña?</a>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-primary w-100 py-2 mb-3" 
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                Iniciando sesión...
                            </>
                        ) : (
                            'Iniciar Sesión'
                        )}
                    </button>

                    <div className="text-center text-muted">
                        <small>¿Necesitas ayuda? <a href="#" className="text-primary text-decoration-none">Contacta soporte</a></small>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;