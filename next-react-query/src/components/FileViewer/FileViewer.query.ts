import { gql } from 'graphql-request';

export const REPO_FILE_QUERY = gql`
  query RepoFile($owner: String!, $name: String!, $path: String!) {
    repository(owner: $owner, name: $name) {
      blob: object(expression: $path) {
        ... on Blob {
          byteSize
          text
        }
      }
    }
  }
`;
