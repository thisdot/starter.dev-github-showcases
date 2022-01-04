import { gql } from 'apollo-angular';

export const REPO_README_QUERY = gql`
  query RepoReadMe($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      readme: object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;
