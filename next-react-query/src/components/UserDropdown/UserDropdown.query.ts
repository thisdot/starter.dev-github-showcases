import { gql } from 'graphql-request';

export const CURRENT_USER_QUERY = gql`
  query CurrentUser {
    viewer {
      avatarUrl
      login
      name
    }
  }
`;
