import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Componentes/Navbar/NavBar.jsx';
import Home from './pages/Home.jsx';
import DetalhesEvento from './pages/DetalhesEvento/DetalhesEvento.jsx';
import CadastrarEvento from './pages/CadastrarEvento/CadastrarEvento.jsx';
import { listaEventosInicial } from './data/dados';

function App() {
  const [eventos, setEventos] = useState(() => {
    const salvos = localStorage.getItem('meus_eventos');
    return salvos ? JSON.parse(salvos) : listaEventosInicial;
  });

  useEffect(() => {
    localStorage.setItem('meus_eventos', JSON.stringify(eventos));
  }, [eventos]);

  const adicionarEvento = (novoEvento) => {
    const eventoComId = { ...novoEvento, id: Date.now() };
    setEventos([...eventos, eventoComId]);
  };


  return (
    <Router>
      <Navbar />
      <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home eventos={eventos} />} />
          <Route path="/evento/:id" element={<DetalhesEvento eventos={eventos} />} />
          <Route 
          path="/cadastrar" 
          element={<CadastrarEvento adicionarEvento={adicionarEvento} />} 
        />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;