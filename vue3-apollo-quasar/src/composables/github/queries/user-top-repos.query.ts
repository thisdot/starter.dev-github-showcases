import { gql } from '@apollo/client';

export const USER_TOP_REPOS_QUERY = gql`
  query UserTopRepos {
    viewer {
      id
      login
      topRepositories(
        first: 20
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          id
          name
          description
          nameWithOwner
          owner {
            login
          }
          primaryLanguage {
            name
            color
          }
          isPrivate
          visibility
          stargazerCount
          forkCount
          updatedAt
        }
      }
    }
  }
`;
