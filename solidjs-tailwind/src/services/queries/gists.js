export const USER_GISTS_QUERY = `
  query UserGists {
    viewer {
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
