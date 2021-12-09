import { gql } from 'apollo-angular';

export const CURRENT_USER_REPOS_QUERY = gql`
  query CurrentUserRepos {
    viewer {
      id
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
