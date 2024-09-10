import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TablaPuntos.css';

function TablaPuntos() {
  const [puntos, setPuntos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    
    const puntosGuardados = JSON.parse(localStorage.getItem('puntos')) || [];
    setPuntos(puntosGuardados);
  }, []);

  return (
    <div className="puntos">
      <h1>Tabla de puntos</h1>
      {puntos.length === 0 ? (
        <p>No hay registro de jugadores. Se el primero en jugar!!!</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            {puntos.map((punto, index) => (
              <tr key={index}>
                <td>{punto.name}</td>
                <td>{punto.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <button className='button-volver' onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
}

export default TablaPuntos;
