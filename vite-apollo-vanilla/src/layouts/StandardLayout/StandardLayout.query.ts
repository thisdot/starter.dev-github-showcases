import { gql } from '@apollo/client';
import { NavBarUserFragmentDoc } from '../../lib/github';

export default gql`
  query StandardLayout {
    viewer {
      ...NavBarUser
    }
    ${NavBarUserFragmentDoc}
  }
`;
