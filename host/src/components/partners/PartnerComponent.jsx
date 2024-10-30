// src/PartnerComponent.jsx
import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; 
import PartnersList from 'remoteApp/PartnersList';

const PartnerComponent = () => {

  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get('index')) || 1; // Lê a página da URL
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Sincroniza a URL sempre que a página atual muda
  useEffect(() => {
    setSearchParams({ index: currentPage });
    console.log('Current page:', currentPage);
  }, [currentPage, setSearchParams]);

  const handlePageChange = (page) => {
    setCurrentPage(page); // Atualiza o estado com a nova página
  };

  return (
    <div>
      <Suspense fallback={<div>Carregando lista de parceiros...</div>}>
        <PartnersList 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />
      </Suspense>
    </div>
  );
};

export default PartnerComponent;