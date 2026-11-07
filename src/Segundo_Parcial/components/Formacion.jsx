import React from 'react';

function Formacion() {
  return (
    <section id="formacion" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 text-primary fw-bold">Formación Académica</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="card h-100 border-success shadow-sm">
              <div className="card-header bg-success text-white fw-bold">
                <i className="bi bi-journal-bookmark-fill me-2"></i>Pregrado
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Ingeniería de Sistemas</h5>
                <h6 className="card-subtitle mb-2 text-muted">Universidad Francisco de Paula Santander Ocaña</h6>
                <p className="card-text">En formación actual (Enfoque en POO, Algoritmos y Desarrollo Web).</p>
                <span className="badge bg-success">2023 - Presente</span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="card h-100 border-info shadow-sm">
              <div className="card-header bg-info text-white fw-bold">
                <i className="bi bi-award-fill me-2"></i>Certificación
              </div>
              <div className="card-body">
                <h5 className="card-title fw-bold">Desarrollo Web Frontend con React y Bootstrap</h5>
                <h6 className="card-subtitle mb-2 text-muted">Cursos en Línea</h6>
                <p className="card-text">Dominio de componentes, maquetación responsive y control de versiones con Git.</p>
                <span className="badge bg-info text-dark">2026</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Formacion;