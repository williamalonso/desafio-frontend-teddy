import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite'; // Use a importação nomeada

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_login',
      filename: 'remoteEntry.js',
      exposes: {
        './Login': './src/Login.tsx', // Exponha o componente de Login
      },
      shared: ['react', 'react-dom'], // Compartilhe as dependências com o shell
    }),
  ],
  server: {
    port: 3001,
  },
});