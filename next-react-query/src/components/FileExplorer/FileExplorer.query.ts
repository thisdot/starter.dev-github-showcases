import { gql } from 'graphql-request';

export const REPO_TREE_QUERY = gql`
  query RepoTree($owner: String!, $name: String!, $path: String!) {
    repository(owner: $owner, name: $name) {
      defaultBranchRef {
        name
      }
      branches: refs(refPrefix: "refs/heads/", last: 5) {
        nodes {
          name
        }
      }
      tree: object(expression: $path) {
        ... on Tree {
          entries {
            name
            type
            path
            object {
              ... on Blob {
                byteSize
              }
            }
          }
        }
      }
    }
  }
`;
