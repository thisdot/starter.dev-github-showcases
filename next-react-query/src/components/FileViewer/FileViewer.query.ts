import { gql } from 'graphql-request';

export const REPO_FILE_QUERY = gql`
  query RepoFile($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      blob: object(expression: $expression) {
        ... on Blob {
          byteSize
          text
        }
      }
    }
  }
`;
