import React from 'react';
import { Link } from 'react-router-dom'; // Importante para o redirecionamento
import './EventCard.css';

// Adicione o 'id' aqui nos parênteses:
const EventCard = ({ id, categoria, titulo, local, data, imagem }) => {
  return (
    <div className="card">
      <div className="card-image">
        {imagem ? (
          <img src={imagem} alt={titulo} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className="placeholder-image">Sem Foto</div>
        )}
      </div>
      
      <div className="card-content">
        <p className="card-category">{categoria}</p>
        <h3 className="card-title">{titulo}</h3>
        
        <div className="card-info">
          <p>📍 {local}</p>
          <p>📅 {data}</p>
        </div>
        
        {/* Agora o 'id' vai funcionar aqui embaixo */}
        <Link to={`/evento/${id}`}>
          <button className="card-button">Ver Detalhes</button>
        </Link>
      </div>
    </div>
  );
};

export default EventCard;