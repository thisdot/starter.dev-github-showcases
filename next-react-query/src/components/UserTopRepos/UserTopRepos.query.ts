import { gql } from 'graphql-request';

export const USER_TOP_REPOS_QUERY = gql`
  query UserTopRepos {
    viewer {
      topRepositories(
        first: 20
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          id
          name
          owner {
            login
          }
          primaryLanguage {
            name
          }
          isPrivate
          stargazerCount
          forkCount
          updatedAt
        }
      }
    }
  }
`;
