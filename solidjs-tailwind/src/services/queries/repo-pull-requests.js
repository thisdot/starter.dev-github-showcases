export const REPO_PULL_REQUESTS = `
  query PullRequests($owner: String!, $name: String!, $first: Int, $last: Int, $before: String, $after: String, $labels: [String!], $orderBy: IssueOrderField!, $direction: OrderDirection!) {
    repository(owner: $owner, name: $name) {
       milestones(first: 100, states: [OPEN]) {
        nodes {
          id
          closed
          description
          number
          title
        }
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        totalCount
      }
      labels(first: 100) {
        totalCount
        nodes {
          color
          name
        }
      }
      openPullRequest: pullRequests(first: $first, last: $last, states: [OPEN], after: $after, before: $before, labels: $labels, orderBy:{ field: $orderBy, direction: $direction}) {
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
      closedPullRequest: pullRequests(first: $first, last: $last, states: [CLOSED, MERGED], after: $after, before: $before, labels: $labels, orderBy:{ field: $orderBy, direction: $direction}) {
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
