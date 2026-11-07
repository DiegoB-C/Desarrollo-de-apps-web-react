import React from 'react';

function SobreMi() {
  return (
    <section id="sobre-mi" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 text-primary fw-bold">Sobre Mí</h2>
        <div className="row g-4">
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-primary h-100">
              <h4 className="fw-bold"><i className="bi bi-person-lines-fill text-primary me-2"></i>Descripción Personal</h4>
              <p className="text-muted">
                Soy estudiante de Ingeniería de Sistemas apasionado por el desarrollo de software, la creación de aplicaciones web interactivas y la resolución de problemas lógicos y matemáticos.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-white rounded shadow-sm border-start border-4 border-success h-100">
              <h4 className="fw-bold"><i className="bi bi-bullseye text-success me-2"></i>Objetivos Laborales</h4>
              <p className="text-muted">
                Consolidar mis conocimientos en desarrollo web Frontend y Backend (Full Stack), participando en proyectos reales de alto impacto que me permitan crecer profesionalmente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SobreMi;