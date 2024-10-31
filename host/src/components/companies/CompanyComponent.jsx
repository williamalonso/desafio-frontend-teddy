import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom'; 
import CompaniesList from 'remoteApp/CompaniesList'; // Importando a lista de empresas

const CompanyComponent = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialPage = Number(searchParams.get('index')) || 1; // Lê a página da URL
  const [currentPage, setCurrentPage] = useState(initialPage);

  // Sincroniza a URL sempre que a página atual muda
  useEffect(() => {
    setSearchParams({ index: currentPage });
  }, [currentPage, setSearchParams]);

  const handlePageChange = (page) => {
    setCurrentPage(page); // Atualiza o estado com a nova página
  };

  return (
    <div>
      <Suspense fallback={<div>Carregando lista de empresas...</div>}>
        <CompaniesList 
          currentPage={currentPage} 
          onPageChange={handlePageChange} 
        />
      </Suspense>
    </div>
  );
};

export default CompanyComponent;