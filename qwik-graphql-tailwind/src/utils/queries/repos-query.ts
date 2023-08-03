export const REPOS_QUERY = `
query UserRepos(
  $username: String!
  $afterCursor: String
  $beforeCursor: String
) {
  owner: user(login: $username) {
    repositories(
      first: 10
      after: $afterCursor
      before: $beforeCursor
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
