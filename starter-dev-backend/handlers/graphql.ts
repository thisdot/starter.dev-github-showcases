import { ApolloServer } from '@apollo/server';
import { startServerAndCreateLambdaHandler } from '@as-integrations/aws-lambda';
import { GitHubAPI } from 'src/rest-api-source/github-rest-api';
import { schema } from '../src/schema';
import { Context } from 'aws-lambda';

export type ApolloServerContext = {
  context: Context;
  restAPISources: {
    githubAPI: GitHubAPI;
  };
};

export const apolloServer = new ApolloServer({
  schema,
  dataSources: () => ({}),
  context: async (): Promise<ApolloServerContext> => {
    return {
      restAPISources: {
        githubAPI: new GitHubAPI(),
      },
    };
  },
});

export const server = startServerAndCreateLambdaHandler(apolloServer);
