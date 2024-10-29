import React, { Suspense, lazy } from 'react';

const Login = lazy(() => import('mfeLogin/Login'));

function App() {
  return (
    <div>
      <h1>Shell Application</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Login />
      </Suspense>
    </div>
  );
}

export default App;