import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client/core';

export default (graphQLApiUrl = 'https://api.github.com/graphql'): unknown => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: graphQLApiUrl,
  });

  // Cache implementation
  const cache = new InMemoryCache();

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

  return { apolloClient };
};
