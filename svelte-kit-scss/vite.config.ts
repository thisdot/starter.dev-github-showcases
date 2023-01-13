import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { configDefaults, type UserConfig as VitestConfig } from 'vitest/config';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import { nodeModulesPolyfillPlugin } from 'esbuild-plugins-node-modules-polyfill';

const config: UserConfig & { test: VitestConfig['test'] } = {
  plugins: [sveltekit()],
  define: {
    // Eliminate in-source test code
    'import.meta.vitest': 'undefined',
  },
  resolve: {
    alias: {
      path: 'rollup-plugin-node-polyfills/polyfills/path',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      // Enable esbuild polyfill plugins
      plugins: [nodeModulesPolyfillPlugin()],
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills()],
    },
  },
  test: {
    // jest like globals
    globals: true,
    environment: 'jsdom',
    // in-source testing
    includeSource: ['src/**/*.{js,ts,svelte}'],
    // Add @testing-library/jest-dom matchers & mocks of SvelteKit modules
    setupFiles: ['./setupTests.ts'],
    // Exclude files in c8
    coverage: {
      exclude: ['setupTest.ts'],
    },
    deps: {
      // Put Svelte component here, e.g., inline: [/svelte-multiselect/, /msw/]
      inline: [],
    },
    // Exclude playwright tests folder
    exclude: [...configDefaults.exclude, 'tests'],
  },
};

export default config;
