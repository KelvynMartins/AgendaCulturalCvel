import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './DetalhesEvento.css';

const DetalhesEvento = ({ eventos }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Encontra o evento na lista
  const evento = eventos?.find(e => e.id === parseInt(id));

  if (!evento) return <div className="error-msg">Evento não encontrado!</div>;

  return (
    <article className="journal-container">
      {/* Botão de voltar discreto no topo */}
      <button className="btn-voltar" onClick={() => navigate(-1)}>
        &larr; Voltar para Home
      </button>

      <header className="journal-header">
        <span className="journal-category">{evento.categoria}</span>
        
        <h1 className="journal-title">{evento.titulo}</h1>
        
        <p className="journal-subtitle">
          Evento acontece no {evento.local}. Confira os detalhes abaixo e participe dessa celebração cultural.
        </p>

        <div className="journal-meta">
          <span className="author">Por <strong>{evento.organizador || 'Redação Cultura'}</strong></span>
          <span className="divider">|</span>
          <span className="date">{evento.data} às {evento.horario}</span>
        </div>
        
        <div className="social-share">
          <button>Facebook</button>
          <button>Twitter</button>
          <button>Whatsapp</button>
        </div>

        <hr className="journal-separator" />
      </header>

      <figure className="journal-figure">
        <img src={evento.imagem} alt={evento.titulo} />
        <figcaption>Foto: Divulgação / {evento.organizador}</figcaption>
      </figure>

      <div className="journal-body">
        <p className="lead-text">
          <strong>CASCAVEL —</strong> {evento.descricaoLonga}
        </p>
        
        <p>
          O evento promete movimentar o cenário de {evento.categoria.toLowerCase()} na região. 
          A organização espera um grande público no {evento.local}, reforçando a importância 
          da cultura local.
        </p>

        {/* Box de "Serviço" (Muito comum em jornalismo de eventos) */}
        <div className="service-box">
          <h3>📍 Serviço</h3>
          <ul>
            <li><strong>O quê:</strong> {evento.titulo}</li>
            <li><strong>Quando:</strong> {evento.data}</li>
            <li><strong>Horário:</strong> {evento.horario}</li>
            <li><strong>Onde:</strong> {evento.local}</li>
            <li><strong>Entrada:</strong> Gratuita (sujeito a lotação)</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default DetalhesEvento;