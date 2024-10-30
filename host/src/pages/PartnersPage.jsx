// src/pages/PartnersPage.jsx
import React, { Suspense } from 'react';
import PartnersList from 'remoteApp/PartnersList'; // Componente remoto

const PartnersPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Gestão de Parceiros</h1>
      <Suspense fallback={<div>Carregando lista de parceiros...</div>}>
        <PartnersList />
      </Suspense>
    </div>
  );
};

export default PartnersPage;