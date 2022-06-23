import { GraphQLClient } from "graphql-request";

let gqlClient: GraphQLClient;

const endpoint =
  process.env.GITHUB_GRAPHQL_ENDPOINT ?? "http://localhost:3000/api/graphql";

// TODO refactor to include auth so we don't have to always pass in auth
gqlClient = new GraphQLClient(endpoint);

export default gqlClient;
