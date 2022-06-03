import { gql } from 'graphql-request';

export const ORG_REPOS_QUERY = gql`
  query OrgRepos(
    $username: String!
    $afterCursor: String
    $beforeCursor: String
    $orderBy: RepositoryOrder
    $first: Int
    $last: Int
  ) {
    owner: organization(login: $username) {
      repositories(
        first: $first
        last: $last
        after: $afterCursor
        before: $beforeCursor
        orderBy: $orderBy
        affiliations: [OWNER]
        ownerAffiliations: [OWNER]
      ) {
        nodes {
          id
          name
          description
          stargazerCount
          forkCount
          isArchived
          isFork
          primaryLanguage {
            id
            color
            name
          }
          isPrivate
          updatedAt
        }
        pageInfo {
          endCursor
          startCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
  }
`;
