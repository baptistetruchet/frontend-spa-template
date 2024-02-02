/// <reference types="vitest" />
import { defineConfig, splitVendorChunkPlugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@mocks": path.resolve(__dirname, "./__mocks__"),
      "@tests": path.resolve(__dirname, "./__tests__"),
    },
  },
  plugins: [
    react(),
    mode === "development" ? TanStackRouterVite() : null,
    splitVendorChunkPlugin(),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (/node_modules\/(rc-|@?ant)/.test(id)) {
            return "antd";
          }
        },
      },
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./__tests__/setup.ts",
  },
}));
