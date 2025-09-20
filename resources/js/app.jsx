import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";

// Dashboards por rol
import ProfesorDashboard from "./views/profesor/Dashboard";
import EstudianteDashboard from "./views/estudiante/Dashboard";
import SecretariaDashboard from "./views/secretaria/Dashboard";
import CoordinadoraDashboard from "./views/coordinadora/Dashboard";
import RectorDashboard from "./views/rector/Dashboard";

function AppContent() {
  const appName = document.getElementById("app").getAttribute("data-app-name");
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <i className="bi bi-mortarboard fs-3 me-2"></i>
            <span className="fs-4">{appName}</span>
          </a>
          <div className="ms-auto">
            <button
              className="btn btn-outline-light"
              onClick={() => setShowLogin(true)}
            >
              Iniciar Sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="bg-primary text-white py-5">
        <div className="container">
          <div className="row min-vh-75 align-items-center">
            <div className="col-md-6">
              <h1 className="display-4 fw-bold mb-4">
                Formando el Futuro con Excelencia
              </h1>
              <p className="lead mb-4">
                Donde los sueños se convierten en logros y cada estudiante
                descubre su potencial único.
              </p>
              <button className="btn btn-warning btn-lg">Conoce Más</button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <i className="bi bi-person-video3 text-primary fs-1 mb-3"></i>
                  <h3 className="card-title">Docentes Expertos</h3>
                  <p className="card-text">
                    Nuestro equipo de profesionales está dedicado a brindar la
                    mejor educación posible.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <i className="bi bi-book text-primary fs-1 mb-3"></i>
                  <h3 className="card-title">Programa Integral</h3>
                  <p className="card-text">
                    Formación académica y desarrollo personal en un solo lugar.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100">
                <div className="card-body">
                  <i className="bi bi-calendar-event text-primary fs-1 mb-3"></i>
                  <h3 className="card-title">Actividades Extracurriculares</h3>
                  <p className="card-text">
                    Fomentamos el desarrollo integral a través de diversas
                    actividades.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white py-5">
        <div className="container text-center">
          <h2 className="display-6 mb-4">
            ¿Listo para unirte a nuestra comunidad?
          </h2>
          <button className="btn btn-light btn-lg">Proceso de Admisión</button>
        </div>
      </section>

      {/* Modals */}
      {showLogin && (
        <div
          className="modal show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Iniciar Sesión</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowLogin(false)}
                ></button>
              </div>
              <div className="modal-body">
                <Login onSuccess={() => setShowLogin(false)} />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>Contacto</h5>
              <p>📍 Dirección del Colegio</p>
              <p>📞 Teléfono: (123) 456-7890</p>
              <p>✉️ info@milagrosa.edu</p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Enlaces Rápidos</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#" className="text-white">
                    Sobre Nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Programas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Admisiones
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Síguenos</h5>
              <div className="d-flex gap-3">
                <a href="#" className="text-white">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="text-white">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div className="text-center">
            <p>© 2025 {appName}. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Landing page con navbar, login modal y demás */}
        <Route path="/" element={<AppContent />} />

        {/* Dashboards */}
        <Route path="/profesor/dashboard" element={<ProfesorDashboard />} />
        <Route path="/estudiante/dashboard" element={<EstudianteDashboard />} />
        <Route path="/secretaria/dashboard" element={<SecretariaDashboard />} />
        <Route
          path="/coordinadora/dashboard"
          element={<CoordinadoraDashboard />}
        />
        <Route path="/rector/dashboard" element={<RectorDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

if (document.getElementById("app")) {
  const root = createRoot(document.getElementById("app"));
  root.render(<App />);
}

export default App;
