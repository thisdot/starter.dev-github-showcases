export const PULL_REQUEST_QUERY = `
  query PullRequests($owner: String!, $name: String!, $first: Int!) {
    repository(owner: $owner, name: $name) {
      openPullRequest: pullRequests(first: $first, states: [OPEN]) {
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
            headRefName
            title
            url
        }
      }
      closedPullRequest: pullRequests(first: $first, states: [CLOSED, MERGED]) {
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
            headRefName
            title
            url
        }
      }
    }
  }
`;
