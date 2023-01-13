export const ISSUES_QUERY = `
  query IssuesQuery($owner: String!, $name: String!, $first: Int!, $labels: [String!], $orderBy: IssueOrderField!, $direction: OrderDirection!) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(
        first: $first
        states: [OPEN]
        labels: $labels
        orderBy: { field: $orderBy, direction:  $direction }
      ) {
        totalCount
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
        states: [CLOSED]
        labels: $labels
        orderBy: { field: $orderBy, direction:  $direction }
      ) {
        totalCount
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
