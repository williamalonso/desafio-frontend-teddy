// mfe-shell/src/App.tsx
// import React, { Suspense } from 'react';
import { Suspense } from 'react';
import Login from 'mfe_login/Login';

// Importando o componente Login do mfe-login
// const Login = React.lazy(() => import('mfe_login/Login'));

function App() {
  return (
    <div>
      <h1>Shell App</h1>
      {/* Suspense para tratar o carregamento do componente */}
      <Suspense fallback={<div>Carregando o componente de login...</div>}>
        <Login />
      </Suspense>
    </div>
  );
}

export default App;