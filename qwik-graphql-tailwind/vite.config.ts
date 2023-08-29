import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import { qwikReact } from '@builder.io/qwik-react/vite';

export default defineConfig(() => {
  return {
    plugins: [qwikCity(), qwikVite(), qwikReact(), tsconfigPaths()],
    optimizeDeps: {
      include: ['date-fns', 'classnames', 'react-markdown', 'rehype-raw', 'remark-gfm', 'msw-storybook-addon', 'msw'],
    },
    test: {
      // ...
    },
  };
});
