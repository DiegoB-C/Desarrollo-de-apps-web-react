import React from 'react';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top shadow">
      <div className="container">
        <a className="navbar-brand text-warning fw-bold" href="#perfil">
          <i className="bi bi-code-slash me-2"></i>Juan Diego - Dev
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#perfil"><i className="bi bi-person-fill me-1"></i>Perfil</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#sobre-mi"><i className="bi bi-info-circle-fill me-1"></i>Sobre mí</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#formacion"><i className="bi bi-mortarboard-fill me-1"></i>Formación</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#habilidades"><i className="bi bi-stars me-1"></i>Habilidades</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;