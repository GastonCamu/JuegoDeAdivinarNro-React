import { useState } from 'react';
import './Inicio.css';
import { useNavigate } from 'react-router-dom';

function Inicio() {
  const [nombre, setNombre] = useState('');
  const navigate = useNavigate();

  const manejarInicio = () => {
    const puntosGuardados = JSON.parse(localStorage.getItem('puntos')) || [];
    const nombreDuplicado = puntosGuardados.some((punto) => punto.name.toLowerCase() === nombre.toLowerCase());

    if (!nombre.trim()) {
      alert('Por favor, ingresa un nombre.');
    } else if (nombreDuplicado) {
      alert('Este nombre ya está en uso. Por favor, elige otro nombre.');
    } else {
      navigate('/juego', { state: { nombre } });
    }
  };

  return (
    <div className='inicio'>
      <video className='fondo' autoPlay loop muted>
        <source src="/assets/videos/fondo-estrellas.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>
      <h1>Bienvenido Jugador</h1>
      <div className='input-nombre'>
        <p>Nombre del jugador:</p>
        <input 
          type="text" 
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder='ejemplo: pepito123'
        />
      </div>
      <button className='button-jugar' onClick={manejarInicio}>Jugar</button>
      <button className='button-tablaPuntos' onClick={() => navigate('/tablaPuntos')}>Tabla de puntos</button>
    </div>
  );
}

export default Inicio;
