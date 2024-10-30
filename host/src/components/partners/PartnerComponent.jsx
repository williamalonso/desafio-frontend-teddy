import React, { Suspense } from 'react';

import PartnersList from "remoteApp/PartnersList";

const PartnerComponent = () => {
  return (
    <div>
      <Suspense fallback={<div>Carregando lista de parceiros...</div>}>
          <PartnersList />
      </Suspense>
    </div>
  );
}
 
export default PartnerComponent;