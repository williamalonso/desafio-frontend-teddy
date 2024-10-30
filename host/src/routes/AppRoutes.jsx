// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Importando paginas locais
import Home from '../pages/Home';
import PartnersPage from '../pages/PartnersPage'; // Nova página de parceiros

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para Home */}
          <Route path="/partners" element={<PartnersPage />} /> {/* Rota para a página de parceiros */}
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;