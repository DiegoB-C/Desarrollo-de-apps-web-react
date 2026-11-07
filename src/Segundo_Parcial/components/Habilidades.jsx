import React from 'react';

function Habilidades() {
  return (
    <section id="habilidades" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-primary fw-bold">Competencias y Habilidades</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="fw-bold text-danger mb-3"><i className="bi bi-cpu-fill me-2"></i>Habilidades Técnicas</h4>
              
              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>React / JavaScript</span>
                  <span className="badge bg-danger">Avanzado</span>
                </div>
                <div className="progress mt-1">
                  <div className="progress-bar bg-danger" style={{ width: '85%' }}></div>
                </div>
              </div>

              <div className="mb-3">
                <div className="d-flex justify-content-between">
                  <span>HTML5 / CSS3 / Bootstrap</span>
                  <span className="badge bg-warning text-dark">Alto</span>
                </div>
                <div className="progress mt-1">
                  <div className="progress-bar bg-warning" style={{ width: '90%' }}></div>
                </div>
              </div>

              <div>
                <div className="d-flex justify-content-between">
                  <span>Git & GitHub</span>
                  <span className="badge bg-primary">Intermedio</span>
                </div>
                <div className="progress mt-1">
                  <div className="progress-bar bg-primary" style={{ width: '75%' }}></div>
                </div>
              </div>

            </div>
          </div>

          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm">
              <h4 className="fw-bold text-success mb-3"><i className="bi bi-chat-heart-fill me-2"></i>Habilidades Blandas</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Trabajo en Equipo
                  <span className="badge bg-success rounded-pill"><i className="bi bi-check-circle-fill"></i></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Resolución de Problemas
                  <span className="badge bg-success rounded-pill"><i className="bi bi-check-circle-fill"></i></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Adaptabilidad
                  <span className="badge bg-success rounded-pill"><i className="bi bi-check-circle-fill"></i></span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                  Pensamiento Lógico
                  <span className="badge bg-success rounded-pill"><i className="bi bi-check-circle-fill"></i></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Habilidades;