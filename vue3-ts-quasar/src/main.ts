import { createApp, h } from 'vue';
import App from './App.vue';
import router from './router';

// GraphQL related
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { DefaultApolloClient } from '@vue/apollo-composable';

// Store - Global state management
import { createPinia } from 'pinia';

// Quasar
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

//
import { setupGraphQL } from './init';

const pinia = createPinia();

//* GraphQL setup

createApp({
  setup() {
    setupGraphQL();
  },
  render: () => h(App),
})
  .use(Quasar, quasarUserOptions)
  .use(pinia)
  .use(router)
  .mount('#app');
