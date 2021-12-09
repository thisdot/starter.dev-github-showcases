import { gql } from 'apollo-angular';

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    viewer {
      id
      avatarUrl
      login
      name
    }
  }
`;
