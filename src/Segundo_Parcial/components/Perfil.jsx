import React from 'react';

function Perfil() {
  return (
    <section id="perfil" className="bg-primary text-white py-5 text-center">
      <div className="container">
        <img
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300"
          alt="Foto de Perfil"
          className="rounded-circle img-thumbnail mb-3 shadow"
          style={{ width: '160px', height: '160px', objectFit: 'cover' }}
        />
        <h1 className="display-4 fw-bold">Juan Diego</h1>
        <p className="lead fs-4">Estudiante de Ingeniería de Sistemas / Desarrollador Web Frontend</p>
        <p><i className="bi bi-geo-alt-fill me-1"></i>Ocaña, Colombia | <i className="bi bi-envelope-fill me-1"></i>juandiego@example.com</p>
        <div className="mt-4">
          <a href="#footer" className="btn btn-warning me-2 fw-bold text-dark shadow-sm">
            <i className="bi bi-send-fill me-1"></i>Contactar
          </a>
          <a href="#sobre-mi" className="btn btn-outline-light shadow-sm">
            <i className="bi bi-arrow-down-circle me-1"></i>Saber más
          </a>
        </div>
      </div>
    </section>
  );
}

export default Perfil;