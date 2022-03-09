import { mergeResolvers } from '@graphql-tools/merge';
import { resolvers as gqlScalarResolvers } from 'graphql-scalars';

export default mergeResolvers([
  gqlScalarResolvers,
  {
    Query: {
      hello: async () => 'Hello name',
    },
  },
]);
