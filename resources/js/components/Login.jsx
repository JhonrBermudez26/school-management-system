import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";



const LoginContainer = styled(motion.div)`
    background: white;
    padding: 2rem;
    border-radius: 16px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
    width: 100%;
    max-width: 500px;
`;

const LoginHeader = styled.div`
    h2 {
        color: #2c3e50;
        font-weight: 600;
    }
`;

const LoginForm = styled.form`
    .form-floating input {
        border-radius: 8px;
        border: 1px solid #e2e8f0;
        transition: all 0.3s ease;

        &:focus {
            border-color: #4299e1;
            box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.15);
        }
    }

    .btn-primary {
        background: linear-gradient(45deg, #4299e1, #667eea);
        border: none;
        border-radius: 8px;
        font-weight: 500;
        padding: 12px;
        transition: all 0.3s ease;

        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(66, 153, 225, 0.2);
        }

        &:disabled {
            background: #94a3b8;
            transform: none;
        }
    }

    a {
        color: #4299e1;
        transition: color 0.2s ease;

        &:hover {
            color: #2b6cb0;
        }
    }

    label {
        color: #64748b;
    }
`;

const AlertError = styled(motion.div)`
    border-radius: 8px;
    border: none;
    background-color: #fee2e2;
    color: #dc2626;
    padding: 1rem;
    margin-bottom: 1rem;
`;

export default function Login({ onSuccess }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const token = document
                .querySelector('meta[name="csrf-token"]')
                .getAttribute("content");

            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "X-CSRF-TOKEN": token,
                },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Error en login");
            }

            const data = await response.json();

            localStorage.setItem("token", data.access_token);
            localStorage.setItem("user", JSON.stringify(data.user));

            if (data.redirect) {
                if (onSuccess) onSuccess();
                navigate(data.redirect);
            }
        } catch (err) {
            setError("Credenciales incorrectas o error en servidor");
        } finally {
            setLoading(false);
        }
    };

    return (

            <LoginContainer
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <LoginHeader>
                    <h2 className="text-center mb-4">Bienvenido</h2>
                    <p className="text-muted text-center">
                        Ingresa tus credenciales para continuar
                    </p>
                </LoginHeader>

                {error && (
                    <AlertError
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        {error}
                    </AlertError>
                )}

                <LoginForm onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="emailInput"
                            placeholder="nombre@ejemplo.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <label htmlFor="emailInput">Correo electrónico</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="passwordInput"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <label htmlFor="passwordInput">Contraseña</label>
                    </div>

                    <div className="mb-3 d-flex justify-content-end">
                        <a
                            href="/recuperar-password"
                            className="text-decoration-none"
                        >
                            ¿Olvidaste tu contraseña?
                        </a>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 py-2"
                        disabled={loading}
                    >
                        {loading ? (
                            <span
                                className="spinner-border spinner-border-sm me-2"
                                role="status"
                                aria-hidden="true"
                            ></span>
                        ) : (
                            <i className="bi bi-box-arrow-in-right me-2"></i>
                        )}
                        {loading ? "Ingresando..." : "Iniciar Sesión"}
                    </button>
                </LoginForm>
            </LoginContainer>

    );
}
