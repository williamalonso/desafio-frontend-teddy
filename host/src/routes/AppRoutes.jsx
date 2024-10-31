// src/routes/AppRoutes.jsx
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivateRoute from '../components/privateRouter/PrivateRoute';

// Importando paginas locais
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import PartnersPage from '../pages/PartnersPage';
import CompaniesPage from '../pages/CompaniesPage';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Rota pública */}
        <Route path="/login" element={<LoginPage />} />
        
        {/* Rota protegida */}
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/companies" element={<CompaniesPage />} />
        </Route>

        {/* Rota para 404 caso a rota não seja encontrada */}
        <Route path="*" element={<h1>Página não encontrada</h1>} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;