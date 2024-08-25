import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Desafio-04-Consumo-de-APIs-con-hook-useEffectPublic",
  plugins: [react()],
});
