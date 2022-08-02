import gql from 'graphql-tag';

export const SEARCH_QUERY = gql`
  query Search {
    search @client
  }
`;
