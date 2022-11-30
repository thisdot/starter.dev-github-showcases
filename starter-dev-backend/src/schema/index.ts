import { mergeResolvers, mergeTypeDefs } from '@graphql-tools/merge';
import { helloTypeDefs, helloResolvers } from './hello';
import { githubTypeDefs, GithubResolvers } from './github';
import { makeExecutableSchema } from '@graphql-tools/schema';

const typeDefs = mergeTypeDefs([helloTypeDefs, githubTypeDefs]);
const resolvers = mergeResolvers([helloResolvers, GithubResolvers]);

export const schema = makeExecutableSchema({ typeDefs, resolvers });
