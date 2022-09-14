import { gql } from '@apollo/client';

export const REPO_BRANCHES_QUERY = gql`
  query RepoBranches($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      defaultBranchRef {
        name
      }
      branches: refs(refPrefix: "refs/heads/", first: 50) {
        nodes {
          name
        }
      }
    }
  }
`;
