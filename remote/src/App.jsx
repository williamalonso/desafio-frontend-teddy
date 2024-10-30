// src/App.jsx
// import { BrowserRouter as Router } from 'react-router-dom';
// import { useState } from 'react';
import './App.css';
import Button from './components/button/Button';
// import AppRoutes from './routes/AppRoutes'; // Importando o componente de rotas
import PartnersList from './components/partners/PartnersList';

function App() {

  return (
    <div className="App">
        <h1>Remote Application</h1>
        <Button />
        <PartnersList />
        {/* Usando o componente de rotas */}
        {/* <AppRoutes /> */}
      </div>
  );
}

export default App;