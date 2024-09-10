import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Juego.css';
import Modal from '../../components/Modal.jsx';

function Juego() {
  const { state } = useLocation();
  const navigate = useNavigate();
  const MedidaPuntaje = 20;
  const cantidadEstrellas = 50;

  const [numeroObjetivo, setNumeroObjetivo] = useState(generarNumeroAleatorio());
  const [inputNumero, setInputNumero] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [mensajeGanarOPerder, setMensajeGanarOPerder] = useState('');
  const [intentosRealizados, setIntentosRealizados] = useState(0);
  const [puntaje, setPuntaje] = useState(MedidaPuntaje);
  const [spans, setSpans] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * MedidaPuntaje) + 1;
  }

  const handleInputNumero = () => {
    const numeroAdivinado = parseInt(inputNumero, 10);

    if (isNaN(numeroAdivinado) || numeroAdivinado < 1 || numeroAdivinado > MedidaPuntaje) {
      setMensaje(`Por favor, ingresa un número válido entre 1 y ${MedidaPuntaje}.`);
      return;
    }

    setIntentosRealizados(intentosRealizados + 1);
    const nuevoPuntaje = puntaje - 1;
    setPuntaje(nuevoPuntaje);

    if (numeroAdivinado === numeroObjetivo) {
      guardarPuntos(state.nombre, nuevoPuntaje);
      setMensajeGanarOPerder(`¡Felicidades, ${state.nombre}! Adivinaste el número en ${intentosRealizados + 1} intentos.`);
      openModal();
      return;
    }

    if (nuevoPuntaje <= 0) {
      guardarPuntos(state.nombre, nuevoPuntaje);
      setMensajeGanarOPerder(`¡Perdiste, ${state.nombre}! Realizaste ${intentosRealizados + 1} intentos.`);
      openModal();
      return;
    }

    setMensaje(numeroAdivinado < numeroObjetivo ? 'Demasiado bajo. Intenta un número mayor.' : 'Demasiado alto. Intenta un número menor.');
  };

  const guardarPuntos = (nombre, puntos) => {
    const puntosGuardados = JSON.parse(localStorage.getItem('puntos')) || [];
    const usuarioExistente = puntosGuardados.find((punto) => punto.name.toLowerCase() === nombre.toLowerCase());

    if (usuarioExistente) {
      if (puntos > usuarioExistente.score) {
        usuarioExistente.score = puntos; 
      }
    } else {
      puntosGuardados.push({ name: nombre, score: puntos });
    }

    puntosGuardados.sort((a, b) => b.score - a.score);
    localStorage.setItem('puntos', JSON.stringify(puntosGuardados));
  };

  const reiniciarJuego = () => {
    closeModal();
    setNumeroObjetivo(generarNumeroAleatorio());
    setInputNumero('');
    setMensaje('');
    setIntentosRealizados(0);
    setPuntaje(MedidaPuntaje);
  };

  useEffect(() => {
    const container = document.querySelector('.div-estrellas');
    if (container) {
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;
      setSpans(
        Array.from({ length: cantidadEstrellas }, (_, i) => {
          const x = Math.random() * (containerWidth - 10);
          const y = Math.random() * (containerHeight - 10);
          const delay = Math.random() * 2;

          return (
            <span
              key={i}
              className="span-estrella"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                animationDelay: `${delay}s`,
              }}
            ></span>
          );
        })
      );
    }
  }, []);

  return (
    <>
      <div className='container'>
        <div className='div-estrellas'>
          {spans}
        </div>
      </div>
      <div className="juego">
        <h1>Bienvenido, {state.nombre}!</h1>
        <p>Adivina un número entre 1 y {MedidaPuntaje}</p>
        <input
          type="number"
          value={inputNumero}
          onChange={(e) => setInputNumero(e.target.value)}
          placeholder="3"
        />
        <p className='p-intentosRestantes'>Intentos restantes: <span>{puntaje}</span></p>
        <button className='button-adivinar' onClick={handleInputNumero}>Adivinar</button>
        {mensaje && <p className='p-mensaje'>{mensaje}</p>}

        <Modal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className='mensajeGanarOPerder'>{mensajeGanarOPerder}</h2>
          <h3 className='mensajePuntuacion'>Tu puntuación fue de <span>{puntaje}</span> puntos</h3>
          <button className='button-reiniciar' onClick={reiniciarJuego}>Reiniciar</button>
          <button className='button-tablaPuntos' onClick={() => navigate('/tablaPuntos')}>Tabla de puntos</button>
        </Modal>
      </div>
    </>
  );
}

export default Juego;
