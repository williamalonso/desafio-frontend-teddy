import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from 'vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_shell', // Nome do aplicativo shell
      remotes: {
        mfe_login: 'mfe_login@http://localhost:3001/remoteEntry.js', // URL do remoteEntry do mfe-login
      },
      shared: ['react', 'react-dom'], // Dependências compartilhadas
    }),
  ],
  server: {
    open: true, // Abre o navegador automaticamente ao iniciar o servidor
    port: 3000, // Porta onde o shell irá rodar
  },
});
