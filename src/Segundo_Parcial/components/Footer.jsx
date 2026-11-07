import React from 'react';

function Footer() {
  return (
    <footer id="footer" className="bg-dark text-white py-4">
      <div className="container text-center">
        <p className="mb-2">&copy; 2026 Juan Diego. Todos los derechos reservados.</p>
        <div className="fs-3 mb-2">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white me-3">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-info me-3">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:juandiego@example.com" className="text-danger">
            <i className="bi bi-envelope-at-fill"></i>
          </a>
        </div>
        <small className="text-muted">Desarrollado para el Segundo Parcial</small>
      </div>
    </footer>
  );
}

export default Footer;