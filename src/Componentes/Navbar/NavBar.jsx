import React from 'react';
import './Navbar.css';
import logoCasvel from '../../assets/logoCascavel.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-nome">CulturaNaRua Cvel</div>
      <div className="navbar-logo">
        <Link to="/">
          <img src={logoCasvel} alt="Logo Cascavel" />
        </Link>
        </div>
      <ul className="navbar-links">
        <li><Link to="/">Inicio</Link></li>
        <li><a href="#sobre">Mapa</a></li>
        <li><Link to="/cadastrar">Cadastrar Eventos</Link></li>        
      </ul>
    </nav>
  );
};

export default Navbar;