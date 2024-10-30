// src/pages/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  
  const [username, setUsername] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (rememberMe) {
      document.cookie = `user=${username}; path=/; max-age=${60 * 60 * 24 * 30}`; // Armazena no cookie por 30 dias
    } else {
      localStorage.setItem('user', username); // Armazena no localStorage
    }
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Digite seu usuário"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: '10px', padding: '8px', width: '300px' }}
      />
      <div>
        <input
          type="checkbox"
          checked={rememberMe}
          onChange={() => setRememberMe(!rememberMe)}
        />
        <label style={{ marginLeft: '5px' }}>Manter conectado</label>
      </div>
      <button
        onClick={handleLogin}
        style={{ marginTop: '20px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Entrar
      </button>
    </div>
  );
};

export default LoginPage;