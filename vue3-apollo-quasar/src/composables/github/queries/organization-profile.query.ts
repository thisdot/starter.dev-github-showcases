import { gql } from '@apollo/client';

export const ORGS_PROFILE_QUERY = gql`
  query OrgsProfile($username: String!) {
    organization(login: $username) {
      avatarUrl
      description
      login
      location
      websiteUrl
      url
      name
    }
  }
`;
