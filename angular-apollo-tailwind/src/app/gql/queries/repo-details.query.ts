import { gql } from 'apollo-angular';

export const REPO_DETAILS_QUERY = gql`
  query RepoDetails($owner: String!, $name: String!) {
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
      issues(first: 1, states: [OPEN]) {
        totalCount
      }
      pullRequests(first: 1, states: [OPEN]) {
        totalCount
      }
    }
  }
`;
