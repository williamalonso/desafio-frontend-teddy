// src/routes/AppRoutes.jsx
import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Importando componentes locais
import Home from '../pages/Home';
import PartnersPage from '../pages/PartnersPage'; // Nova página de parceiros

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Carregando...</div>}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Rota para Home */}
          <Route path="/partners" element={<PartnersPage />} /> {/* Rota para a página de parceiros */}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default AppRoutes;