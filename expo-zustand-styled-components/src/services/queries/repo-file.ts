export const REPO_FILE_QUERY = `
  query RepoFile($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      blob: object(expression: $expression) {
        ... on Blob {
          byteSize
          text
        }
      }
    }
  }
`;
