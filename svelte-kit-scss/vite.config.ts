import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import { configDefaults, type UserConfig as VitestConfig } from 'vitest/config';
import path from 'path';

const config: UserConfig & { test: VitestConfig['test'] } = {
  plugins: [sveltekit()],
  define: {
    // Eliminate in-source test code
    'import.meta.vitest': 'undefined',
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

  resolve: {
    alias: {
      $lib: path.resolve(__dirname, './src/lib'),
      '@toruslabs/openlogin': path.resolve(
        './node_modules/@toruslabs/openlogin/dist/openlogin.umd.min.js'
      ),
    },
  },
};

export default config;
