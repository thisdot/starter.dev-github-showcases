import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';
import { provideApolloClient } from '@vue/apollo-composable';
import { setContext } from '@apollo/client/link/context';

import { useToken } from '@/composables';
import { filterType } from '@/globals/filtertype';
import { sortBy } from '@/globals/sortby';
import { filteredLanguage } from '@/globals/filteredLanguage';
import { search } from '@/globals/search';

const { getAuthToken } = useToken();

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: process.env.VUE_APP_GRAPHQL_URL,
});

const authLink = setContext((_, { headers }) => {
  const authToken = getAuthToken();

  return authToken
    ? { headers: { ...headers, authorization: `Bearer ${authToken}` } }
    : { headers };
});

// Cache implementation
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        filterType: {
          read() {
            return filterType();
          },
        },
        sortby: {
          read() {
            return sortBy();
          },
        },
        language: {
          //The name we will be querying
          read() {
            return filteredLanguage(); //Returns the updated value of counts
          },
        },
        search: {
          read() {
            return search();
          },
        },
      },
    },
  },
});

// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache,
});

export const setupGraphQL = (): void => {
  provideApolloClient(apolloClient);
};
