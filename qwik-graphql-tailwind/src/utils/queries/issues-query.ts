export const ISSUES_QUERY = `
  query IssuesQuery($owner: String!, $name: String!, $first: Int!) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(
        first: $first
        states: [OPEN]
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
            state
            createdAt
            closedAt
            comments {
              totalCount
            }
            number
            author {
              login
            }
            url
            title
          }
      }

      closedIssues: issues(
        first: $first
        states: [CLOSED]
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
            state
            createdAt
            closedAt
            comments {
              totalCount
            }
            number
            author {
              login
            }
            url
            title
          }
      }
    }
  }
`;
