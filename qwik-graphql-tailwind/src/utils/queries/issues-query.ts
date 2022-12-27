export const ISSUES_QUERY = `
  query IssuesQuery($owner: String!, $name: String!, $first: Int!, $before: String, $after: String, $orderBy: IssueOrderField!, $direction: OrderDirection!) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(
        first: $first
        states: [OPEN]
        after: $after
        before: $before
        orderBy:{ field: $orderBy, direction: $direction}
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
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
        after: $after
        before: $before
        orderBy:{ field: $orderBy, direction: $direction}
      ) {
        totalCount
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
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
