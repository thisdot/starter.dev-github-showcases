import { gql } from 'graphql-request';

export const REPO_README_QUERY = gql`
  query RepoReadMe($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      readme: object(expression: $expression) {
        ... on Blob {
          text
        }
      }
    }
  }
`;
