import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Desafio-03--Renderizaci-n-din-mica-de-componentes-",
  plugins: [react()],
});
