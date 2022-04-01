import { gql } from 'graphql-request';

export const ORG_PROFILE_QUERY = gql`
  query OrgProfile($username: String!) {
    organization(login: $username) {
      avatarUrl
      name
    }
  }
`;
