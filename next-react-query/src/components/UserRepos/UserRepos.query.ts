import { gql } from 'graphql-request';

export const USER_REPOS_QUERY = gql`
  query UserRepos($username: String!, $orderBy: RepositoryOrder) {
    user(login: $username) {
      repositories(first: 20, orderBy: $orderBy) {
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
