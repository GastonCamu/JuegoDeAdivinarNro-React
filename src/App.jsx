import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Inicio from './pages/Inicio/Inicio.jsx';
import Juego from './pages/Juego/Juego.jsx';
import TablaPuntos from './pages/TablaPuntos/TablaPuntos.jsx';

import './styles/Index.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/juego" element={<Juego />} />
        <Route path="/tablaPuntos" element={<TablaPuntos />} />
      </Routes>
    </Router>
  )
}

export default App;
