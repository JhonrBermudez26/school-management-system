import React, { useState, useEffect } from 'react';

const EstudianteDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Verificar si hay usuario logueado
        const userData = JSON.parse(localStorage.getItem('user') || 'null');
        const token = localStorage.getItem('token');
        
        if (!userData || !token || userData.role !== 'estudiante') {
            window.location.href = '/';
            return;
        }
        
        setUser(userData);
        setLoading(false);
    }, []);

    const handleLogout = async () => {
        try {
            const token = localStorage.getItem('token');
            await fetch('/logout', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
                }
            });
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        } finally {
            localStorage.removeItem('token');
            localStorage.removeItem('user');
            window.location.href = '/';
        }
    };

    if (loading) {
        return (
            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid">
            <div className="row">
                {/* Sidebar */}
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse" id="sidebarMenu">
                    <div className="position-sticky pt-3">
                        <div className="text-center mb-4">
                            <i className="bi bi-person-circle fs-1 text-primary"></i>
                            <h6 className="mt-2">{user?.name}</h6>
                            <span className="badge bg-success">Estudiante</span>
                        </div>
                        
                        <ul className="nav flex-column">
                            <li className="nav-item">
                                <a className="nav-link active" href="#" aria-current="page">
                                    <i className="bi bi-house-door me-2"></i>
                                    Inicio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-journal-text me-2"></i>
                                    Mis Calificaciones
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-calendar3 me-2"></i>
                                    Horarios
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-book me-2"></i>
                                    Materias
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-chat-dots me-2"></i>
                                    Mensajes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-bell me-2"></i>
                                    Notificaciones
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-gear me-2"></i>
                                    Configuración
                                </a>
                            </li>
                        </ul>
                        
                        <hr />
                        
                        <div className="dropdown">
                            <button 
                                className="btn btn-outline-danger btn-sm w-100"
                                onClick={handleLogout}
                            >
                                <i className="bi bi-box-arrow-right me-2"></i>
                                Cerrar Sesión
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Main content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {/* Header */}
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">
                            <i className="bi bi-person-badge me-2 text-primary"></i>
                            Dashboard Estudiante
                        </h1>
                        <div className="btn-toolbar mb-2 mb-md-0">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                                <i className="bi bi-calendar3 me-1"></i>
                                Hoy: {new Date().toLocaleDateString('es-ES')}
                            </button>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="row mb-4">
                        <div className="col-xl-3 col-md-6">
                            <div className="card text-bg-primary mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="card-title">Promedio General</h6>
                                            <h2 className="mb-0">4.2</h2>
                                            <small>+0.2 este mes</small>
                                        </div>
                                        <i className="bi bi-graph-up fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-md-6">
                            <div className="card text-bg-success mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="card-title">Materias</h6>
                                            <h2 className="mb-0">8/10</h2>
                                            <small>Aprobadas</small>
                                        </div>
                                        <i className="bi bi-check-circle fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-md-6">
                            <div className="card text-bg-warning mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="card-title">Asistencia</h6>
                                            <h2 className="mb-0">95%</h2>
                                            <small>Este período</small>
                                        </div>
                                        <i className="bi bi-calendar-check fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-md-6">
                            <div className="card text-bg-info mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="card-title">Actividades</h6>
                                            <h2 className="mb-0">12</h2>
                                            <small>Participadas</small>
                                        </div>
                                        <i className="bi bi-trophy fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="row">
                        {/* Próximas Evaluaciones */}
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">
                                        <i className="bi bi-clipboard-check me-2 text-primary"></i>
                                        Próximas Evaluaciones
                                    </h5>
                                    <span className="badge bg-primary">3 pendientes</span>
                                </div>
                                <div className="card-body">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div>
                                                <h6 className="mb-1">Matemáticas - Examen Final</h6>
                                                <p className="mb-1 text-muted">Álgebra y Geometría</p>
                                                <small className="text-muted">Prof. García • Aula 301</small>
                                            </div>
                                            <div className="text-end">
                                                <span className="badge bg-danger">Mañana</span>
                                                <br />
                                                <small className="text-muted">10:00 AM</small>
                                            </div>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div>
                                                <h6 className="mb-1">Historia - Ensayo</h6>
                                                <p className="mb-1 text-muted">Segunda Guerra Mundial</p>
                                                <small className="text-muted">Prof. López • Entrega digital</small>
                                            </div>
                                            <div className="text-end">
                                                <span className="badge bg-warning">En 3 días</span>
                                                <br />
                                                <small className="text-muted">11:59 PM</small>
                                            </div>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div>
                                                <h6 className="mb-1">Ciencias - Laboratorio</h6>
                                                <p className="mb-1 text-muted">Experimentos de Química</p>
                                                <small className="text-muted">Prof. Martínez • Lab. 201</small>
                                            </div>
                                            <div className="text-end">
                                                <span className="badge bg-info">Próxima semana</span>
                                                <br />
                                                <small className="text-muted">2:00 PM</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-primary btn-sm">
                                        <i className="bi bi-eye me-1"></i>
                                        Ver todas las evaluaciones
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        {/* Horario de Hoy */}
                        <div className="col-lg-4">
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <i className="bi bi-clock me-2 text-success"></i>
                                        Horario de Hoy
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="timeline">
                                        <div className="d-flex justify-content-between align-items-center mb-3 p-2 rounded" style={{backgroundColor: '#e3f2fd'}}>
                                            <div>
                                                <strong>Matemáticas</strong>
                                                <br />
                                                <small className="text-muted">Prof. García</small>
                                            </div>
                                            <div className="text-end">
                                                <strong>08:00 - 09:00</strong>
                                                <br />
                                                <span className="badge bg-success">Ahora</span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3 p-2">
                                            <div>
                                                <strong>Español</strong>
                                                <br />
                                                <small className="text-muted">Prof. Rodríguez</small>
                                            </div>
                                            <div className="text-end">
                                                <strong>09:00 - 10:00</strong>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3 p-2">
                                            <div>
                                                <span className="text-muted">Descanso</span>
                                            </div>
                                            <div className="text-end">
                                                <span className="text-muted">10:00 - 10:30</span>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center mb-3 p-2">
                                            <div>
                                                <strong>Historia</strong>
                                                <br />
                                                <small className="text-muted">Prof. López</small>
                                            </div>
                                            <div className="text-end">
                                                <strong>10:30 - 11:30</strong>
                                            </div>
                                        </div>
                                        <div className="d-flex justify-content-between align-items-center p-2">
                                            <div>
                                                <strong>Educación Física</strong>
                                                <br />
                                                <small className="text-muted">Prof. Jiménez</small>
                                            </div>
                                            <div className="text-end">
                                                <strong>11:30 - 12:30</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-success btn-sm w-100">
                                        <i className="bi bi-calendar-week me-1"></i>
                                        Ver horario completo
                                    </button>
                                </div>
                            </div>

                            {/* Notificaciones Recientes */}
                            <div className="card mt-3">
                                <div className="card-header">
                                    <h6 className="mb-0">
                                        <i className="bi bi-bell me-2 text-warning"></i>
                                        Notificaciones
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item px-0">
                                            <div className="d-flex">
                                                <i className="bi bi-exclamation-triangle text-warning me-2"></i>
                                                <div>
                                                    <small><strong>Recordatorio:</strong> Examen de Matemáticas mañana</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item px-0">
                                            <div className="d-flex">
                                                <i className="bi bi-info-circle text-info me-2"></i>
                                                <div>
                                                    <small>Nueva tarea disponible en Historia</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EstudianteDashboard;