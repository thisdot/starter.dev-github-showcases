import { ApolloServer, gql } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello(greeting: String!): String!
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: async (_, { greeting }) => {
      return `Hello, ${greeting}`;
    },
  },
};

const getHandler = (event, context) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,

    // By default, the GraphQL Playground interface and GraphQL introspection
    // is disabled in "production" (i.e. when `process.env.NODE_ENV` is `production`).
    //
    // If you'd like to have GraphQL Playground and introspection enabled in production,
    // install the Playground plugin and set the `introspection` option explicitly to `true`.
    introspection: true,
    persistedQueries: false,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground({
        settings: { 'schema.polling.enable': false },
      }),
    ],
  });
  const graphqlHandler = server.createHandler();
  if (!event.requestContext) {
    event.requestContext = context;
  }
  return graphqlHandler(event, context, () => {});
};

export const handler = getHandler;
