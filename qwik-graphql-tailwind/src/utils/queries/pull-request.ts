export const PULL_REQUEST_QUERY = `
  query PullRequests($owner: String!, $name: String!, $first: Int!, $before: String, $after: String, $labels: [String!], $orderBy: IssueOrderField!, $direction: OrderDirection!) {
    repository(owner: $owner, name: $name) {
      openPullRequest: pullRequests(first: $first, states: [OPEN], after: $after, before: $before, labels: $labels, orderBy:{ field: $orderBy, direction: $direction}) {
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
            headRefName
            title
            url
        }
      }
      closedPullRequest: pullRequests(first: $first, states: [CLOSED, MERGED], after: $after, before: $before, labels: $labels, orderBy:{ field: $orderBy, direction: $direction}) {
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
            headRefName
            title
            url
        }
      }
    }
  }
`;
