import { createApp, provide, h } from 'vue';
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

import { EnvironmentConfig } from './config';

const pinia = createPinia();

//* GraphQL setup
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: EnvironmentConfig.GRAPHQL_URL,
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});

createApp({
  setup() {
    provide(DefaultApolloClient, apolloClient);
  },
  render: () => h(App),
})
  .use(Quasar, quasarUserOptions)
  .use(pinia)
  .use(router)
  .mount('#app');
