import { gql } from 'graphql-request';

export const USER_REPOS_QUERY = gql`
  query UserRepos(
    $username: String!
    $afterCursor: String
    $beforeCursor: String
    $orderBy: RepositoryOrder
  ) {
    user(login: $username) {
      repositories(
        first: 20
        after: $afterCursor
        before: $beforeCursor
        orderBy: $orderBy
      ) {
        nodes {
          id
          name
          description
          stargazerCount
          forkCount
          primaryLanguage {
            id
            color
            name
          }
          isPrivate
          updatedAt
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
