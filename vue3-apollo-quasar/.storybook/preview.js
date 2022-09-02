import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import '@quasar/extras/animate/fadeInUp.css';
import '@quasar/extras/animate/fadeOutDown.css';
import '@quasar/extras/animate/fadeInRight.css';
import '@quasar/extras/animate/fadeOutRight.css';

import 'quasar/dist/quasar.css';
import { app } from '@storybook/vue3';
import { Quasar } from 'quasar';
import { createPinia } from 'pinia';
import { initialize, mswDecorator } from 'msw-storybook-addon';

import { setupGraphQL } from '@/init';

const pinia = createPinia();

app.use(Quasar, {}).use(pinia);

// Initialize MSW
initialize();

// Initialize graphql setup
setupGraphQL();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
