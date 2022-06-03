import type { GraphQLClient } from 'graphql-request';

declare global {
  var gqlClient: GraphQLClient;
}
