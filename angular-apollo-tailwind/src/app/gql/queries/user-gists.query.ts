import { gql } from 'apollo-angular';

export const USER_GISTS_QUERY = gql`
  query UserGists {
    viewer {
      id
      gists(last: 20, orderBy: { field: CREATED_AT, direction: DESC }) {
        nodes {
          id
          description
          url
          name
          files {
            name
          }
        }
      }
    }
  }
`;
