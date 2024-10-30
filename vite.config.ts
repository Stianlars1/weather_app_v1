/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), basicSsl()],
  build: {
    outDir: "build",
    sourcemap: false,
    emptyOutDir: true,
  },

  server: {
    host: true,
    port: 3000,
    https: {},
    hmr: {
      port: 3000,
      host: "localhost",
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setupTests.ts"],
  },
});
