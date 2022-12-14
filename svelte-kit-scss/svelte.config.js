import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess({ typescript: true, scss: true }),

  kit: {
    adapter: adapter({
      edge: true,
    }),
  },
};

export default config;
