import { useState } from 'react';
import './App.css';

function App() {

  const [numeroObjetivo, setNumeroObjetivo] = useState(generarNumeroAleatorio());
  const [inputNumero, setInputNumero] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [intentosRealizados, setIntentosRealizados] = useState(0);

  function generarNumeroAleatorio() {
    return Math.floor(Math.random() * 20) + 1;
  }


  const handleInputNumero = () => {
    const numeroAdivinado = parseInt(inputNumero, 10);
    setIntentosRealizados(intentosRealizados + 1);

    if (isNaN(numeroAdivinado)) {
      setMensaje('Por favor, ingresa un número válido.');
    } else if (numeroAdivinado < numeroObjetivo) {
      setMensaje('Demasiado bajo. Intenta un número mayor.');
    } else if (numeroAdivinado > numeroObjetivo) {
      setMensaje('Demasiado alto. Intenta un número menor.');
    } else {
      setMensaje(`¡Felicidades! Adivinaste el número en ${intentosRealizados + 1} intentos.`);
    }
  };

  const reiniciarJuego = () => {
    setNumeroObjetivo(generarNumeroAleatorio());
    setInputNumero('');
    setMensaje('');
    setIntentosRealizados(0);
  };

  return (
    <div className="App">
      <h1>Juego de Adivinar el Número</h1>
      <p>Adivina un número entre 1 y 20:</p>
      <input
        type="number"
        value={inputNumero}
        onChange={(e) => setInputNumero(e.target.value)}
        placeholder="Escribe tu adivinanza"
      />
      <button onClick={handleInputNumero}>Adivinar</button>
      <button onClick={reiniciarJuego}>Reiniciar</button>
      <p>{mensaje}</p>
    </div>
  );
}

export default App;
