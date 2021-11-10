import { gql } from 'graphql-request';

export const REPO_FILE_QUERY = gql`
  query RepoFile($owner: String!, $name: String!, $path: String!) {
    repository {
      blob: object(expression: $path) {
        ... on Blob {
          byteSize
          text
        }
      }
    }
  }
`;
