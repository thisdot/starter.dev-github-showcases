import gql from 'graphql-tag';

export const SORT_BY_QUERY = gql`
  query SorBy {
    sortby @client
  }
`;
