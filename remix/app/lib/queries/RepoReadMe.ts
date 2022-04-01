import { gql } from 'graphql-request';

export const REPO_README_QUERY = gql`
  query RepoReadMe($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      readme: object(expression: "HEAD:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;
