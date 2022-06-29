import { gql } from '@apollo/client';

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
