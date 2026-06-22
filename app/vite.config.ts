import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const API_TARGET = process.env.VITE_API_PROXY || "http://127.0.0.1:8100";

export default defineConfig({
  base: "./",
  plugins: [react()],
  server: {
    port: 5180,
    proxy: {
      "/api": { target: API_TARGET, changeOrigin: true },
      "/health": { target: API_TARGET, changeOrigin: true },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});