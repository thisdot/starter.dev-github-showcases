import { gql } from 'apollo-angular';

export const REPO_PAGE_QUERY = gql`
  query RepoPage($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      id
      defaultBranchRef {
        name
      }
      description
      isPrivate
      forkCount
      stargazerCount
      watchers(last: 1) {
        totalCount
      }
      openIssues: issues(first: 1, states: [OPEN]) {
        totalCount
      }
      openPullRequests: pullRequests(first: 1, states: [OPEN]) {
        totalCount
      }
    }
  }
`;
