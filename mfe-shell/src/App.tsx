import React from 'react';

// Importando o componente Login do mfe-login
const Login = React.lazy(() => import('mfe_login/Login'));

function App() {
  return (
    <div>
      <h1>Shell App</h1>
      <Login />
      {/* Usando Suspense para lidar com a importação assíncrona */}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense> */}
    </div>
  );
}

export default App;