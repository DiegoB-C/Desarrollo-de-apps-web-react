import React from 'react';
import miFoto from './assets/pc.webp'; 

function App() {
  const cajaStyle = {
    fontFamily: 'Segoe UI, sans-serif',
    backgroundColor: '#181825',
    color: '#cdd6f4',
    padding: '25px',
    borderRadius: '10px',
    maxWidth: '550px',
    margin: '30px auto',
    textAlign: 'center',
    border: '1px solid #313244'
  };

  const fotoStyle = {
    width: '160px',
    height: '160px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #89b4fa',
    margin: '15px 0'
  };

  return (
    <div style={cajaStyle}>
      <h1 style={{ color: '#89b4fa' }}>Presentación Personal</h1>
      <p>
        Hola, soy estudiante de Ingeniería de Sistemas. Me interesa el desarrollo
        de software, los videojuegos y el entrenamiento.
      </p>
      
      <img 
        src={miFoto} 
        alt="Foto personal" 
        style={fotoStyle} 
      />

      <div style={{ textAlign: 'left', marginTop: '15px' }}>
        <h3 style={{ color: '#f5e0dc' }}>Pasatiempos e intereses:</h3>
        <ul>
          <li>Programación en React y JavaScript</li>
          <li>Ir al gimnasio</li>
          <li>Juegos de PC</li>
        </ul>
      </div>
    </div>
  );
}

export default App;