import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CadastrarEvento.css';

const CadastrarEvento = ({adicionarEvento}) => {
  const navigate = useNavigate();
 const [formData, setFormData] = useState({
    titulo: '',
    categoria: '',
    local: '',
    data: '',
    horario: '',
    organizador: '',
    descricaoLonga: '',
    imagem: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Agora o código vai encontrar a função abaixo:
    adicionarEvento(formData); 
    
    alert("Evento cadastrado!");
    navigate("/"); // Volta para a Home para ver o novo card
  };

  return (
    <div className="cadastro-container">
      <form className="cadastro-form" onSubmit={handleSubmit}>
        <h2>Cadastrar Novo Evento</h2>
        <p>Compartilhe a cultura de Cascavel com a cidade.</p>

        <label>Título do Evento</label>
        <input 
          type="text" name="titulo" placeholder="Ex: Feira do Teatro" 
          value={formData.titulo} onChange={handleChange} required 
        />

        <div className="form-group-row">
          <div>
            <label>Categoria</label>
            <select name="categoria" value={formData.categoria} onChange={handleChange} required>
              <option value="">Selecione...</option>
              <option value="Música">Música</option>
              <option value="Artesanato">Artesanato</option>
              <option value="Cultura Urbana">Cultura Urbana</option>
              <option value="Teatro">Teatro</option>
            </select>
          </div>
          <div>
            <label>Data</label>
            <input type="date" name="data" value={formData.data} onChange={handleChange} required />
          </div>
        </div>

        <label>Local (Endereço ou Nome do Lugar)</label>
        <input 
          type="text" name="local" placeholder="Ex: Praça do Migrante" 
          value={formData.local} onChange={handleChange} required 
        />

        <label>URL da Imagem</label>
        <input 
          type="text" name="imagem" placeholder="Link da foto do evento" 
          value={formData.imagem} onChange={handleChange} 
        />

        <label>Descrição Completa</label>
        <textarea 
          name="descricao" rows="4" placeholder="Detalhes sobre o evento..." 
          value={formData.descricao} onChange={handleChange} required
        ></textarea>

        <button type="submit" className="btn-enviar">Publicar Evento</button>
      </form>
    </div>
  );
};

export default CadastrarEvento;