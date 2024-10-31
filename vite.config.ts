/// <reference types="vitest/config" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import basicSsl from "@vitejs/plugin-basic-ssl";
import fs from "fs";
import path from "path";
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
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "./cert/localhost-key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "./cert/localhost.pem")),
    },
  },

  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setupTests.ts"],
  },
});
