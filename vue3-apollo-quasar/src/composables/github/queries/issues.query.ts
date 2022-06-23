import { gql } from '@apollo/client';

export const ISSUES_QUERY = gql`
  query IssuesQuery($owner: String!, $name: String!, $first: Int!) {
    repository(owner: $owner, name: $name) {
      openIssues: issues(first: $first, states: [OPEN]) {
        edges {
          node {
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
            title
          }
        }
      }

      closedIssues: issues(first: $first, states: [CLOSED]) {
        edges {
          node {
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
          }
        }
      }
    }
  }
`;
