import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import { FaGraduationCap, FaBook, FaChalkboardTeacher, FaCalendarAlt } from 'react-icons/fa';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';

function App() {
  const appName = document.getElementById('app').getAttribute('data-app-name');
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section con gradiente */}
      <div className="relative h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600">
        {/* Navbar con efecto glass */}
        <nav className="relative z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
          <div className="container mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <FaGraduationCap className="text-4xl text-yellow-400" />
                <span className="text-2xl font-bold text-white">{appName}</span>
              </div>
              <div className="flex space-x-4">
                <button 
                  onClick={() => setShowLogin(true)}
                  className="px-6 py-2 text-white border-2 border-white rounded-full
                           hover:bg-white hover:text-blue-900 transition-all"
                >
                  Iniciar Sesión
                </button>
                <button 
                  onClick={() => setShowRegister(true)}
                  className="px-6 py-2 bg-yellow-400 text-blue-900 rounded-full
                           hover:bg-yellow-300 transition-all font-semibold"
                >
                  Registro
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl">
              <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
                Formando el Futuro con Excelencia
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Donde los sueños se convierten en logros y cada estudiante 
                descubre su potencial único.
              </p>
              <button className="px-8 py-3 bg-yellow-400 text-blue-900 rounded-full
                               text-lg font-semibold hover:bg-yellow-300 transition-all
                               shadow-lg hover:shadow-xl">
                Conoce Más
              </button>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
          </svg>
        </div>
      </div>

      {/* Features Section with Cards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl
                          shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <FaChalkboardTeacher className="text-5xl text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Docentes Expertos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nuestro equipo de profesionales está dedicado a brindar 
                la mejor educación posible.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl
                          shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <FaBook className="text-5xl text-green-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Programa Integral
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Formación académica y desarrollo personal en un solo lugar.
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl
                          shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
              <FaCalendarAlt className="text-5xl text-purple-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Actividades Extracurriculares
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Fomentamos el desarrollo integral a través de diversas actividades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8">
            ¿Listo para unirte a nuestra comunidad?
          </h2>
          <button className="px-8 py-3 bg-white text-blue-600 rounded-full
                           text-lg font-semibold hover:bg-gray-100 transition-all
                           shadow-lg hover:shadow-xl">
            Proceso de Admisión
          </button>
        </div>
      </section>

      {/* Modal mejorado */}
      {showLogin && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center 
                      justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 w-full max-w-md transform
                        transition-all shadow-2xl">
            <LoginForm />
          </div>
        </div>
      )}

      {showRegister && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md m-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-semibold">Registro</h2>
              <button onClick={() => setShowRegister(false)}
                      className="text-gray-400 hover:text-gray-600">
                ✕
              </button>
            </div>
            <RegisterForm />
          </div>
        </div>
      )}

      {/* Footer mejorado */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-semibold mb-4">Contacto</h5>
              <p>📍 Dirección del Colegio</p>
              <p>📞 Teléfono: (123) 456-7890</p>
              <p>✉️ info@milagrosa.edu</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Enlaces Rápidos</h5>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-white">Programas</a></li>
                <li><a href="#" className="hover:text-white">Admisiones</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Síguenos</h5>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">Facebook</a>
                <a href="#" className="hover:text-white">Twitter</a>
                <a href="#" className="hover:text-white">Instagram</a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p>© 2025 Colegio Milagrosa. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

// Renderiza la aplicación
if (document.getElementById('app')) {
    const root = createRoot(document.getElementById('app'));
    root.render(<App />);
}

export default App;
