import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from "@originjs/vite-plugin-federation";

const remoteAppUrl = process.env.VITE_REMOTE_APP_URL || "http://localhost:5001/assets/remoteEntry.js";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "host_app",
      remotes: {
        remoteApp: remoteAppUrl,
      },
      shared: ["react", "react-dom"],
    })
  ],
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
})