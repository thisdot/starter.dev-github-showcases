export const ISSUES_QUERY = `
  query IssuesQuery($owner: String!, $name: String!, $first: Int!, $before: String, $after: String, $labels: [String!], $orderBy: IssueOrderField!, $direction: OrderDirection!) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(
        first: $first
        states: [OPEN]
        labels: $labels
        after: $after
        before: $before
        orderBy: { field: $orderBy, direction:  $direction }
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
            labels(first: 100) {
              totalCount
              nodes {
                color
                name
              }
            }
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
        after: $after
        before: $before
        states: [CLOSED]
        labels: $labels
        orderBy: { field: $orderBy, direction:  $direction }
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
            labels(first: 100) {
              totalCount
              nodes {
                color
                name
              }
            }
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
