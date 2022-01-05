import { gql } from 'apollo-angular';

export const REPO_README_QUERY = gql`
  query RepoReadMe($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      id
      readme: object(expression: $expression) {
        ... on Blob {
          text
        }
      }
    }
  }
`;
