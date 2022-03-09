import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello(greeting: String!): String!
  }
`);

export default graphqlHTTP({
  schema,
  graphiql: process.env.NODE_ENV !== 'production',
});
