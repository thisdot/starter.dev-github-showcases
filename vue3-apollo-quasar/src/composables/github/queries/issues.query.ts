import { gql } from '@apollo/client';

export const ISSUES_QUERY = gql`
  query IssuesQuery(
    $owner: String!
    $name: String!
    $first: Int
    $last: Int
    $before: String
    $after: String
    $orderBy: IssueOrderField!
    $direction: OrderDirection!
    $filterBy: IssueFilters
  ) {
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
      openIssues: issues(
        first: $first
        last: $last
        states: [OPEN]
        after: $after
        before: $before
        filterBy: $filterBy
        orderBy: { field: $orderBy, direction: $direction }
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
        last: $last
        states: [CLOSED]
        after: $after
        before: $before
        filterBy: $filterBy
        orderBy: { field: $orderBy, direction: $direction }
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
