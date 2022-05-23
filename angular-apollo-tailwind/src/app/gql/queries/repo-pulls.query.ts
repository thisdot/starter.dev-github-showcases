import { gql } from 'apollo-angular';

export const REPO_PULLS_QUERY = gql`
  query RepoPullRequests(
    $owner: String!
    $name: String!
    $first: Int
    $last: Int
    $before: String
    $after: String
    $labels: [String!]
    $orderBy: IssueOrder
  ) {
    repository(owner: $owner, name: $name) {
      id
      openPullRequests: pullRequests(
        first: $first
        last: $last
        states: [OPEN]
        labels: $labels
        orderBy: $orderBy
        after: $after
        before: $before
      ) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        nodes {
          id
          author {
            login
          }
          comments(first: 1) {
            totalCount
          }
          labels(first: 100) {
            totalCount
            nodes {
              color
              name
            }
          }
          closed
          closedAt
          merged
          mergedAt
          title
          number
          createdAt
        }
      }
      closedPullRequests: pullRequests(
        first: $first
        last: $last
        states: [CLOSED, MERGED]
        labels: $labels
        orderBy: $orderBy
        after: $after
        before: $before
      ) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        nodes {
          id
          author {
            login
          }
          comments(first: 1) {
            totalCount
          }
          labels(first: 100) {
            totalCount
            nodes {
              color
              name
            }
          }
          closed
          closedAt
          merged
          mergedAt
          title
          number
          createdAt
        }
      }
    }
  }
`;
