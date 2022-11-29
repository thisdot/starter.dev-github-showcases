const { ApolloServer, gql } = require('apollo-server-lambda');
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
const typeDefs = gql`
  type Query {
    hello(greeting: String!): String!
  }
`;

const resolvers = {
  Query: {
    hello: async ({ greeting }) => {
      return `Hello, ${greeting}`;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: false,
});

exports.handler = startServerAndCreateLambdaHandler(server);
