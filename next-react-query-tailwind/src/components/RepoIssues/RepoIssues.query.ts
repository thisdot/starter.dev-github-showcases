import { gql } from 'graphql-request';

export const REPO_ISSUES_QUERY = gql`
  query RepoIssues(
    $owner: String!
    $name: String!
    $before: String
    $after: String
    $filterBy: IssueFilters
    $orderBy: IssueOrder
    $first: Int
    $last: Int
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
      closedIssues: issues(
        first: $first
        last: $last
        states: [CLOSED]
        filterBy: $filterBy
        orderBy: $orderBy
        after: $after
        before: $before
      ) {
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
        totalCount
        nodes {
          id
          author {
            login
          }
          comments(first: 1) {
            totalCount
          }
          labels(first: 100) {
            nodes {
              color
              name
            }
            totalCount
          }
          closed
          closedAt
          title
          number
          createdAt
        }
      }
      openIssues: issues(
        first: $first
        last: $last
        states: [OPEN]
        filterBy: $filterBy
        orderBy: $orderBy
        after: $after
        before: $before
      ) {
        pageInfo {
          hasNextPage
          endCursor
          hasPreviousPage
          startCursor
        }
        totalCount
        nodes {
          id
          author {
            login
          }
          comments(first: 1) {
            totalCount
          }
          labels(first: 5) {
            nodes {
              color
              name
            }
          }
          closed
          title
          number
          createdAt
        }
      }
    }
  }
`;
