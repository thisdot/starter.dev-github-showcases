import { gql } from 'graphql-request';

export const REPO_TREE_QUERY = gql`
  query RepoTree($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      branches: refs(refPrefix: "refs/heads/", last: 5) {
        nodes {
          name
        }
      }
      tree: object(expression: $expression) {
        ... on Tree {
          entries {
            name
            type
            path
          }
        }
      }
    }
  }
`;
