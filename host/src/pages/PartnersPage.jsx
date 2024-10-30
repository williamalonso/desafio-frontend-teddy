// src/pages/PartnersPage.jsx
import React, { Suspense } from 'react';
import Navbar from '../components/navbar/Navbar';
import PartnerComponent from '../components/partners/PartnerComponent';

const PartnersPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestão de Parceiros</h1>
      <Navbar />
      <div style={{ marginTop: '50px' }}>
        <PartnerComponent />
      </div>
    </div>
  );
};

export default PartnersPage;