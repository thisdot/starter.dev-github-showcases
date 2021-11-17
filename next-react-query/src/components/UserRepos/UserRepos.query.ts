import { gql } from 'graphql-request';

export const USER_REPOS_QUERY = gql`
  query UserRepos($username: String!) {
    user(login: $username) {
      repositories(first: 25) {
        nodes {
          id
          name
          description
          stargazerCount
          forkCount
          primaryLanguage {
            color
            name
          }
          isPrivate
          updatedAt
        }
      }
    }
  }
`;
