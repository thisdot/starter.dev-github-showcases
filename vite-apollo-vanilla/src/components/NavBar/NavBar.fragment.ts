import { gql } from '@apollo/client';

export const NAV_BAR_USER_FRAGMENT = gql`
  fragment NavBarUser on User {
    login
    avatarUrl
  }
`;
