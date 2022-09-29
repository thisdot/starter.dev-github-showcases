import { gql } from '@apollo/client';

export const ORGANIZATION_REPOS_QUERY = gql`
  query OrganizationRepos($organization: String!, $first: Int!) {
    organization(login: $organization) {
      repositories(first: $first, ownerAffiliations: [OWNER]) {
        edges {
          node {
            id
            name
            description
            url
            forkCount
            stargazerCount
            isArchived
            isFork
            primaryLanguage {
              color
              name
              id
            }
            updatedAt
            visibility
            nameWithOwner
            owner {
              login
            }
          }
        }
      }
    }
  }
`;
