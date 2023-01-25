/* eslint-env node */
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';

export default defineConfig({
  plugins: [spaFallbackWithDot(), solidPlugin()],
  server: {
    port: 3000,
    hmr: {
      overlay: false,//To hide the overlay error message
    },
  },
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupVitest.js',
    deps: {
      inline: [/solid-js/, /solid-testing-library/],
    },
  },
  resolve: {
    conditions: ['development', 'browser'],
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
});

/**
 * Vite doesn't handle fallback html with dot (.), see https://github.com/vitejs/vite/issues/2415
 * @returns {import("vite").Plugin}
 */
function spaFallbackWithDot() {
  return {
    name: 'spa-fallback-with-dot',
    configureServer(server) {
      return () => {
        server.middlewares.use(function customSpaFallback(req, res, next) {
          if (req.url.includes('.')) {
            req.url = '/index.html';
          }
          next();
        });
      };
    },
  };
}
