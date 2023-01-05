export const REPO_PULL_REQUESTS = `
  query PullRequests($owner: String!, $name: String!, $first: Int!, $labels: [String!], $orderBy: IssueOrderField!, $direction: OrderDirection!) {
      repository(owner: $owner, name: $name) {
      openPullRequest: pullRequests(first: $first, states: [OPEN], labels: $labels, orderBy:{ field: $orderBy, direction: $direction}) {
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
          headRefName
          title
          url
        }
      }
      closedPullRequest: pullRequests(first: $first, states: [CLOSED, MERGED], labels: $labels, orderBy:{ field: $orderBy, direction: $direction}) {
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
          headRefName
          title
          url
        }
      }
    }
  }
`