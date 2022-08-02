import gql from 'graphql-tag';

export const FILTER_TYPE_QUERY = gql`
  query FilterType {
    filterType @client
  }
`;
