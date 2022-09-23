import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';

//Code highlighter

import 'highlight.js/styles/stackoverflow-light.css';
import 'highlight.js/lib/common';
import hljsVuePlugin from '@highlightjs/vue-plugin';

// Store - Global state management
import { createPinia } from 'pinia';

// Quasar
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

//
import { setupGraphQL } from './init';

const pinia = createPinia();

//* GraphQL setup
const app = createApp({
  setup() {
    setupGraphQL();
  },
  render: () => h(App),
});

app
  .use(Quasar, quasarUserOptions)
  .use(pinia)
  .use(hljsVuePlugin)
  .use(router)
  .mount('#app');

app.component('highlightjs', hljsVuePlugin.component);
