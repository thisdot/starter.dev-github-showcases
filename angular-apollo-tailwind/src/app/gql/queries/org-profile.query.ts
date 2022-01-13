import { gql } from 'apollo-angular';

export const ORG_PROFILE_QUERY = gql`
  query OrgProfile($orgname: String!) {
    organization(login: $orgname) {
      id
      avatarUrl
      name
    }
  }
`;
