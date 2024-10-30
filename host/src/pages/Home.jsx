// src/components/Home.jsx
import React from 'react';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Bem-vindo ao Aplicativo Host</h1>
      <Navbar />
    </div>
  );
};

export default Home;