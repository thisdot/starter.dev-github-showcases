export const ISSUES_QUERY = `
  query IssuesQuery($owner: String!, $name: String!, $first: Int!, $orderBy: IssueOrderField!, $direction: OrderDirection!) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(
        first: $first
        states: [OPEN]
        orderBy:{ field: $orderBy, direction: $direction}
      ) {
        totalCount
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
        orderBy:{ field: $orderBy, direction: $direction}
      ) {
        totalCount
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
