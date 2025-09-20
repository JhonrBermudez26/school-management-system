import React, { useState, useEffect } from 'react';

const ProfesorDashboard = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userData = JSON.parse(localStorage.getItem('user') || 'null');
        const token = localStorage.getItem('token');
        
        if (!userData || !token || userData.role !== 'profesor') {
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
                <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar">
                    <div className="position-sticky pt-3">
                        <div className="text-center mb-4">
                            <i className="bi bi-person-workspace fs-1 text-primary"></i>
                            <h6 className="mt-2">{user?.name}</h6>
                            <span className="badge bg-info">Profesor</span>
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
                                    <i className="bi bi-people me-2"></i>
                                    Mis Estudiantes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-journal-bookmark me-2"></i>
                                    Calificaciones
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-calendar-event me-2"></i>
                                    Horarios
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-clipboard-data me-2"></i>
                                    Evaluaciones
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-file-earmark-text me-2"></i>
                                    Reportes
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    <i className="bi bi-chat-square-text me-2"></i>
                                    Mensajes
                                </a>
                            </li>
                        </ul>
                        
                        <hr />
                        
                        <button 
                            className="btn btn-outline-danger btn-sm w-100"
                            onClick={handleLogout}
                        >
                            <i className="bi bi-box-arrow-right me-2"></i>
                            Cerrar Sesión
                        </button>
                    </div>
                </nav>

                {/* Main content */}
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {/* Header */}
                    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                        <h1 className="h2">
                            <i className="bi bi-person-workspace me-2 text-primary"></i>
                            Dashboard Profesor
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
                                            <h6 className="card-title">Estudiantes</h6>
                                            <h2 className="mb-0">124</h2>
                                            <small>Total asignados</small>
                                        </div>
                                        <i className="bi bi-people fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-md-6">
                            <div className="card text-bg-success mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="card-title">Clases Hoy</h6>
                                            <h2 className="mb-0">6</h2>
                                            <small>Programadas</small>
                                        </div>
                                        <i className="bi bi-calendar-check fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-md-6">
                            <div className="card text-bg-warning mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="card-title">Por Calificar</h6>
                                            <h2 className="mb-0">23</h2>
                                            <small>Evaluaciones</small>
                                        </div>
                                        <i className="bi bi-clipboard-check fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-3 col-md-6">
                            <div className="card text-bg-info mb-3">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h6 className="card-title">Materias</h6>
                                            <h2 className="mb-0">3</h2>
                                            <small>Asignadas</small>
                                        </div>
                                        <i className="bi bi-book fs-1 opacity-75"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="row">
                        {/* Clases de Hoy */}
                        <div className="col-lg-8">
                            <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">
                                        <i className="bi bi-clock me-2 text-primary"></i>
                                        Clases de Hoy
                                    </h5>
                                    <span className="badge bg-success">6 clases</span>
                                </div>
                                <div className="card-body">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div>
                                                <h6 className="mb-1">Matemáticas - Grado 10A</h6>
                                                <p className="mb-1 text-muted">Álgebra Lineal</p>
                                                <small className="text-muted">Aula 301 • 28 estudiantes</small>
                                            </div>
                                            <div className="text-end">
                                                <span className="badge bg-success">En curso</span>
                                                <br />
                                                <small className="text-muted">08:00 - 09:00</small>
                                            </div>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div>
                                                <h6 className="mb-1">Matemáticas - Grado 10B</h6>
                                                <p className="mb-1 text-muted">Álgebra Lineal</p>
                                                <small className="text-muted">Aula 302 • 26 estudiantes</small>
                                            </div>
                                            <div className="text-end">
                                                <span className="badge bg-primary">Siguiente</span>
                                                <br />
                                                <small className="text-muted">09:00 - 10:00</small>
                                            </div>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-center px-0">
                                            <div>
                                                <h6 className="mb-1">Geometría - Grado 11A</h6>
                                                <p className="mb-1 text-muted">Trigonometría</p>
                                                <small className="text-muted">Aula 301 • 24 estudiantes</small>
                                            </div>
                                            <div className="text-end">
                                                <span className="badge bg-light text-dark">Programada</span>
                                                <br />
                                                <small className="text-muted">10:30 - 11:30</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <div className="row">
                                        <div className="col">
                                            <button className="btn btn-outline-primary btn-sm">
                                                <i className="bi bi-calendar-week me-1"></i>
                                                Ver horario completo
                                            </button>
                                        </div>
                                        <div className="col text-end">
                                            <button className="btn btn-primary btn-sm">
                                                <i className="bi bi-plus me-1"></i>
                                                Nueva clase
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Evaluaciones Pendientes */}
                            <div className="card mt-3">
                                <div className="card-header d-flex justify-content-between align-items-center">
                                    <h5 className="mb-0">
                                        <i className="bi bi-clipboard-data me-2 text-warning"></i>
                                        Evaluaciones por Calificar
                                    </h5>
                                    <span className="badge bg-warning">23 pendientes</span>
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Evaluación</th>
                                                    <th>Materia</th>
                                                    <th>Grado</th>
                                                    <th>Estudiantes</th>
                                                    <th>Fecha Límite</th>
                                                    <th>Acción</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Examen Parcial</td>
                                                    <td>Matemáticas</td>
                                                    <td>10A</td>
                                                    <td>28</td>
                                                    <td><span className="text-danger">Hoy</span></td>
                                                    <td>
                                                        <button className="btn btn-sm btn-primary">
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>Quiz</td>
                                                    <td>Geometría</td>
                                                    <td>11A</td>
                                                    <td>24</td>
                                                    <td>Mañana</td>
                                                    <td>
                                                        <button className="btn btn-sm btn-outline-primary">
                                                            <i className="bi bi-pencil"></i>
                                                        </button>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Panel Lateral */}
                        <div className="col-lg-4">
                            {/* Resumen de Grupos */}
                            <div className="card">
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <i className="bi bi-people me-2 text-info"></i>
                                        Mis Grupos
                                    </h5>
                                </div>
                                <div className="card-body">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item d-flex justify-content-between px-0">
                                            <div>
                                                <strong>Matemáticas 10A</strong>
                                                <br />
                                                <small className="text-muted">28 estudiantes</small>
                                            </div>
                                            <span className="badge bg-primary">Activo</span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between px-0">
                                            <div>
                                                <strong>Matemáticas 10B</strong>
                                                <br />
                                                <small className="text-muted">26 estudiantes</small>
                                            </div>
                                            <span className="badge bg-primary">Activo</span>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between px-0">
                                            <div>
                                                <strong>Geometría 11A</strong>
                                                <br />
                                                <small className="text-muted">24 estudiantes</small>
                                            </div>
                                            <span className="badge bg-primary">Activo</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-outline-info btn-sm w-100">
                                        <i className="bi bi-eye me-1"></i>
                                        Ver todos los grupos
                                    </button>
                                </div>
                            </div>

                            {/* Recordatorios */}
                            <div className="card mt-3">
                                <div className="card-header">
                                    <h6 className="mb-0">
                                        <i className="bi bi-exclamation-triangle me-2 text-warning"></i>
                                        Recordatorios
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item px-0">
                                            <div className="d-flex">
                                                <i className="bi bi-clock text-danger me-2"></i>
                                                <div>
                                                    <small><strong>Urgente:</strong> Calificar examen 10A</small>
                                                    <br />
                                                    <small className="text-muted">Vence hoy</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item px-0">
                                            <div className="d-flex">
                                                <i className="bi bi-calendar text-info me-2"></i>
                                                <div>
                                                    <small>Reunión de padres - Grado 10A</small>
                                                    <br />
                                                    <small className="text-muted">Viernes 2:00 PM</small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="list-group-item px-0">
                                            <div className="d-flex">
                                                <i className="bi bi-journal text-success me-2"></i>
                                                <div>
                                                    <small>Entregar notas del período</small>
                                                    <br />
                                                    <small className="text-muted">Próxima semana</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Acciones Rápidas */}
                            <div className="card mt-3">
                                <div className="card-header">
                                    <h6 className="mb-0">
                                        <i className="bi bi-lightning me-2 text-primary"></i>
                                        Acciones Rápidas
                                    </h6>
                                </div>
                                <div className="card-body">
                                    <div className="d-grid gap-2">
                                        <button className="btn btn-outline-primary btn-sm">
                                            <i className="bi bi-plus me-2"></i>
                                            Crear Evaluación
                                        </button>
                                        <button className="btn btn-outline-success btn-sm">
                                            <i className="bi bi-calendar-plus me-2"></i>
                                            Agendar Clase
                                        </button>
                                        <button className="btn btn-outline-info btn-sm">
                                            <i className="bi bi-file-earmark-text me-2"></i>
                                            Generar Reporte
                                        </button>
                                        <button className="btn btn-outline-warning btn-sm">
                                            <i className="bi bi-send me-2"></i>
                                            Enviar Mensaje
                                        </button>
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

export default ProfesorDashboard;