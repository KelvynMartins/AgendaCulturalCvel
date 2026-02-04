import React from 'react';
import EventCard from '../Componentes/EventCard/EventCard.jsx';

// Importante: Receber { eventos } entre chaves nos parâmetros!
const Home = ({ eventos }) => {
  
  // Caso a lista ainda não tenha carregado, evita que a tela fique branca
  if (!eventos || eventos.length === 0) {
    return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Nenhum evento encontrado.</h2>;
  }

  return (
    <div style={{ 
      display: 'flex', 
      gap: '20px', 
      padding: '20px', 
      flexWrap: 'wrap', 
      justifyContent: 'center' 
    }}>
      {eventos.map((evento) => (
        <EventCard 
          key={evento.id} 
          {...evento} // Isso passa automaticamente id, titulo, imagem, etc.
        />
      ))}
    </div>
  );
};

export default Home;