import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  build: {
    // Enables the generation of source maps
    sourcemap: true,
  },
  plugins: [react()],
});
