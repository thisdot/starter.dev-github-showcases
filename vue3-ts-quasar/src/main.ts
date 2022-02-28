import { createApp, provide, h } from 'vue';
import App from './App.vue';
import router from './router';

// GraphQL related
import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { DefaultApolloClient } from '@vue/apollo-composable';

// Store - Global state management
import { createPinia } from 'pinia';

// Quasar
import { Quasar } from 'quasar';
import quasarUserOptions from './quasar-user-options';

import { EnvironmentConfig } from './config';
import { useToken } from '@/composables';

// State management
const pinia = createPinia();

//* GraphQL setup
// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: EnvironmentConfig.GRAPHQL_URL,
});

const { getAuthToken } = useToken();

const authLink = setContext((_, { headers }) => {
  const authToken = getAuthToken();
  console.log('Auth token: ', authToken);

  return authToken
    ? { headers: { ...headers, authorization: `Bearer ${authToken}` } }
    : { headers };
});

// Cache implementation
const cache = new InMemoryCache();

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
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
