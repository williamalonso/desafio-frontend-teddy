import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite'; // Importa o plugin de federação de módulos

export default defineConfig({
  plugins: [
    react(), // Adiciona suporte para React
    federation({
      name: 'mfe_login', // Nome do microfrontend
      filename: 'remoteEntry.js', // Nome do arquivo de entrada remota
      exposes: {
        './Login': './src/Login.tsx', // Expondo o componente Login
      },
      shared: ['react', 'react-dom'], // Compartilha as dependências com o shell
    }),
  ],
  server: {
    open: true,
    port: 3001, // Porta em que o Vite será executado
  },
});