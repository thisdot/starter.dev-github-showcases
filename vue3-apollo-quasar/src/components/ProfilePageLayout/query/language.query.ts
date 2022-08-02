import gql from 'graphql-tag';

export const LANGUAGE_QUERY = gql`
  query Language {
    language @client
  }
`;
