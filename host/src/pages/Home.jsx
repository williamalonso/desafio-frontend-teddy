// src/components/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

import Button from "remoteApp/Button";
import PartnersList from "remoteApp/PartnersList";

const Home = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
<PartnersList />
      <Button />
      <h1>Bem-vindo ao Aplicativo Host</h1>
      <p>Use os links abaixo para navegar:</p>

      <div style={{ marginTop: '20px' }}>
        <Link to="/partners">
          <button style={{ padding: '10px 20px', marginRight: '10px' }}>
            Ver Lista de Parceiros
          </button>
        </Link>

        <Link to="/">
          <button style={{ padding: '10px 20px' }}>Página Inicial</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
