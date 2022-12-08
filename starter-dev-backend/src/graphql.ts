import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { schema } from './schema';
import { GitHubAPI } from './datasources/github-api';
import { LambdaContextFunctionParams } from 'apollo-server-lambda/dist/ApolloServer';
import { Context } from 'aws-lambda';
import { InMemoryLRUCache } from '@apollo/utils.keyvaluecache';

interface ApolloServerContext {
  context: Context;
  token: String;
}

export const apolloServer = new ApolloServer({
  cache: new InMemoryLRUCache(),
  schema,
  dataSources: () => {
    return {
      githubAPI: new GitHubAPI(),
    };
  },
  context: async ({
    event,
    context,
  }: LambdaContextFunctionParams): Promise<ApolloServerContext> => {
    const token = event.headers.authorization;
    return {
      ...context,
      token,
    };
  },
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

const getHandler = (event: any, context: any) => {
  const graphqlHandler = apolloServer.createHandler();
  if (!event.requestContext) {
    event.requestContext = context;
  }
  return graphqlHandler(event, context, () => {});
};

export const handler = getHandler;
