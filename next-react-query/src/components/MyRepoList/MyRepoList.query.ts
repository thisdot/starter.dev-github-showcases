import { gql } from 'graphql-request';

export const MY_REPOS_QUERY = gql`
  query MyRepos {
    viewer {
      repositories(first: 10, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          id
          name
          url
          owner {
            login
          }
        }
      }
    }
  }
`;
