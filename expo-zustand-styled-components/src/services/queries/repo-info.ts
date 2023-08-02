export const REPO_INFO_QUERY = `
  query RepoPage($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      defaultBranchRef {
        name
      }
      visibility
      isPrivate
      stargazerCount
      forkCount
      description
      homepageUrl
      watchers(last: 1) {
        totalCount
      }
      issues(first: 1, states: [OPEN]) {
        totalCount
      }
      pullRequests(first: 1, states: [OPEN]) {
        totalCount
      }
      topics: repositoryTopics(first: 10) {
        nodes {
          id
          topic {
            name
          }
        }
      }
      owner {
        ... on Organization {
          orgName: name
          orgAvatarUrl: avatarUrl
        }
      }
    }
  }
`;
