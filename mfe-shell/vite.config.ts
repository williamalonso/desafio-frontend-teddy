import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite'; // Importação do plugin de federação

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mfe_shell',
      remotes: {
        mfe_login: 'mfe_login@http://localhost:3001/remoteEntry.js', // URL do remoteEntry do mfe-login
      },
      shared: ['react', 'react-dom'], // Compartilhe dependências
    }),
  ],
  server: {
    open: true,
    port: 3000, // Porta onde o shell irá rodar
  },
});