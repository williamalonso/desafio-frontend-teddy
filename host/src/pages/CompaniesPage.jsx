// src/pages/CompaniesPage.jsx
import React from 'react';
import Navbar from '../components/navbar/Navbar';
// import PartnerComponent from '../components/partners/PartnerComponent';
import CompanyComponent from '../components/companies/CompanyComponent';

const CompaniesPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestão de Empresas</h1>
      <Navbar />
      <div style={{ marginTop: '50px' }}>
        <CompanyComponent />
      </div>
    </div>
  );
};

export default CompaniesPage;