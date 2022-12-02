import { ApolloServer, gql } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { schema } from './schema';
import { GitHubAPI } from './rest-api-source/github-rest-api';

import { LambdaContextFunctionParams } from 'apollo-server-lambda/dist/ApolloServer';
import { Context } from 'aws-lambda';

interface ApolloServerContext {
  context: Context;
  restAPISources: {
    githubAPI: GitHubAPI;
  };
}

const getHandler = (event: any, context: any) => {
  const server = new ApolloServer({
    schema,
    dataSources: () => ({}),
    context: async ({
      event,
      context,
    }: LambdaContextFunctionParams): Promise<ApolloServerContext> => {
      return {
        context,
        restAPISources: {
          githubAPI: new GitHubAPI(),
        },
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
  const graphqlHandler = server.createHandler();
  if (!event.requestContext) {
    event.requestContext = context;
  }
  return graphqlHandler(event, context, () => {});
};

export const handler = getHandler;
