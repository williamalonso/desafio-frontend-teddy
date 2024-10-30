// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Importando paginas locais
import Home from '../pages/Home';
import PartnersPage from '../pages/PartnersPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<PartnersPage />} /> 
        </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;