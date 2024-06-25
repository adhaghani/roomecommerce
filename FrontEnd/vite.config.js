import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  proxy: {
    '/api': {
      target: 'http://localhost/CSC264/RoomAPI/',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
});