import { gql } from 'apollo-angular';

export const REPO_FILE_QUERY = gql`
  query RepoFile($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      id
      blob: object(expression: $expression) {
        ... on Blob {
          byteSize
          text
        }
      }
    }
  }
`;
