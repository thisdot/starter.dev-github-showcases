import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello(greeting: String!): String!
  }
`);

const root = {
  hello: async ({ greeting }) => {
    return `Hello, ${greeting}`;
  },
};
export default graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: process.env.NODE_ENV !== 'production',
});
