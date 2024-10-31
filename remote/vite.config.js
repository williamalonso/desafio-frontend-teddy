import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "remote_app",
      filename: "remoteEntry.js",
      exposes: {
        "./PartnersList": "./src/components/partners/PartnersList",
        "./CompaniesList": "./src/components/companies/CompaniesList",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
  server: {
    cors: {
      origin: "*", // Permite qualquer origem
      methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"], // Métodos permitidos
      allowedHeaders: ["X-Requested-With", "content-type", "Authorization"], // Cabeçalhos permitidos
    },
    // Se você estiver usando uma porta diferente, certifique-se de especificá-la aqui
    port: 5001,
  },
})
