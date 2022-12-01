import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
import { schema } from './schema';
import { GitHubAPI } from './datasources/github-api';
import { LambdaContextFunctionParams } from 'apollo-server-lambda/dist/ApolloServer';
import { Context } from 'aws-lambda';

interface ApolloServerContext {
  context: Context;
  dataSources: {
    githubAPI: GitHubAPI;
  };
  token: String;
}

const getHandler = (event: any, context: any) => {
  const server = new ApolloServer({
    schema,
    context: async ({
      event,
      context,
    }: LambdaContextFunctionParams): Promise<ApolloServerContext> => {
      const token = req.headers.token;
      return {
        context,
        dataSources: {
          githubAPI: new GitHubAPI({ token }),
        },
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
  const graphqlHandler = server.createHandler();
  if (!event.requestContext) {
    event.requestContext = context;
  }
  return graphqlHandler(event, context, () => {});
};

export const handler = getHandler;
