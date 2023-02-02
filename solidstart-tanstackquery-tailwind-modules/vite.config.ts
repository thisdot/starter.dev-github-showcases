/// <reference types="vitest" />
/// <reference types="vite/client" />
import solid from "solid-start/vite";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [solid()],
  server: {
    port: 3000,
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['@tanstack/solid-query', 'msw', 'msw-storybook-addon']
  },
  test: {
    globals: true,
    environment: 'jsdom',
    transformMode: {
      web: [/.[jt]sx?/],
    },
    deps: {
        inline: [/solid-start/, /solid-testing-library/],
      },
    },
  resolve: {
    conditions: ['development', 'browser'],
  },
});