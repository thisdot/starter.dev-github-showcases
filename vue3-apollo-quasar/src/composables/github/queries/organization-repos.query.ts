import { gql } from '@apollo/client';

export const ORGANIZATION_REPOS_QUERY = gql`
  query OrganizationRepos($organization: String!, $first: Int!) {
    organization(login: $organization) {
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
            visibility
          }
        }
      }
    }
  }
`;
