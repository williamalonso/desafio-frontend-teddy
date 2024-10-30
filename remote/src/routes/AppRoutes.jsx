// src/routes/AppRoutes.jsx
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PartnersList from '../components/partners/PartnersList'; // Ajuste o caminho conforme necessário

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PartnersList />} />
      {/* Adicione outras rotas conforme necessário */}
    </Routes>
  );
};

export default AppRoutes;