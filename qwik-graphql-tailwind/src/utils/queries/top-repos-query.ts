export const TOP_REPOS_QUERY = `
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
        owner {
          login
        }
        primaryLanguage {
          name
          color
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
