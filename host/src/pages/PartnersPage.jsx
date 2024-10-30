// src/pages/PartnersPage.jsx
import React, { Suspense } from 'react';
import Navbar from '../components/navbar/Navbar';

import PartnersList from "remoteApp/PartnersList";

const PartnersPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestão de Parceiros</h1>
      <Navbar />
      <div style={{ marginTop: '50px' }}>
        <Suspense fallback={<div>Carregando lista de parceiros...</div>}>
          <PartnersList />
        </Suspense>
      </div>
    </div>
  );
};

export default PartnersPage;