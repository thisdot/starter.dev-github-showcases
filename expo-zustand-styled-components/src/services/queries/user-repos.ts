export const USER_REPOS_QUERY = `
  query UserRepos(
    $username: String!
    $afterCursor: String
    $beforeCursor: String
    $orderBy: RepositoryOrder
    $first: Int
    $last: Int
  ) {
    owner: user(login: $username) {
      repositories(
        first: $first
        last: $last
        after: $afterCursor
        before: $beforeCursor
        orderBy: $orderBy
        ownerAffiliations: [OWNER]
      ) {
        nodes {
          id
          name
          description
          stargazerCount
          forkCount
          isArchived
          isFork
          primaryLanguage {
            id
            color
            name
          }
          languages(first: 10, orderBy: { direction: ASC, field: SIZE }) {
            nodes {
              color
              name
              id
            }
          }
          isPrivate
          visibility
          updatedAt
          owner {
            login
          }
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
