export const USER_PROFILE_QUERY = `
  query UserProfile($username: String!, $afterCursor: String, $beforeCursor: String) {
    user(login: $username) {
      avatarUrl
      bio
      company
      followers(first: 0) {
        totalCount
      }
      following(first: 0) {
        totalCount
      }
      location
      login
      name
      organizations(first: 6) {
        nodes {
          avatarUrl
          login
        }
      }
      starredRepositories(first: 0) {
        totalCount
      }
      repositories(
        first: 10
        after: $afterCursor
        before: $beforeCursor
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
      twitterUsername
      websiteUrl
    }
  }
`;
