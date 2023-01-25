export const ORGANIZATION_REPOS_QUERY = `
  query OrganizationRepos($organization: String!, $first: Int!) {
    organization(login: $organization) {
      avatarUrl
      name
      repositories(first: $first) {
        edges {
          node {
            name
            description
            url
            forkCount
            stargazerCount
            primaryLanguage {
              color
              name
              id
            }
            updatedAt
            owner {
              login
            }
            visibility
          }
        }
      }
    }
  }
`;
