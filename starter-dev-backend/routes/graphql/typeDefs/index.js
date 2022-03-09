import gql from 'graphql-tag';
import { mergeTypeDefs } from '@graphql-tools/merge';
import { typeDefs as gqlScalarTypeDefs } from 'graphql-scalars';

export default mergeTypeDefs([
  gqlScalarTypeDefs,
  gql`
    type Query {
      hello(greeting: String!): String!
    }
  `,
]);
