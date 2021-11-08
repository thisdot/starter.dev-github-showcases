import { gql } from 'graphql-request';

export const REPO_PAGE_QUERY = gql`
  query RepoPage($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      defaultBranchRef {
        name
      }
      isPrivate
      stargazerCount
      forkCount
      description
      watchers(last: 100) {
        totalCount
      }
    }
  }
`;
