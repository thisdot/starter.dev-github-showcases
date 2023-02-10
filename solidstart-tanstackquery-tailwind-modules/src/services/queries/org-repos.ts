export const ORGANIZATION_REPOS_QUERY = `
query OrganizationRepos(
  $organization: String!
  $afterCursor: String
  $beforeCursor: String
  $orderBy: RepositoryOrder
  $first: Int
  $last: Int
) {
organization(login: $organization) {
    avatarUrl
    name
    repositories(
      first: $first
      last: $last
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


