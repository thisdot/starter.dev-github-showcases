import { GraphQLClient } from 'graphql-request';

let gqlClient: GraphQLClient;

const endpoint =
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT ??
  'http://localhost:3000/api/graphql';

if (process.env.NODE_ENV === 'production') {
  gqlClient = new GraphQLClient(endpoint);
} else {
  if (!global.gqlClient) {
    global.gqlClient = new GraphQLClient(endpoint);
  }
  gqlClient = global.gqlClient;
}

export default gqlClient;
