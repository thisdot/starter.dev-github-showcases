import { gql } from 'apollo-angular';

export const ORG_REPOS_QUERY = gql`
  query OrgRepos(
    $orgname: String!
    $first: Int
    $last: Int
    $afterCursor: String
    $beforeCursor: String
    $orderBy: RepositoryOrder
  ) {
    organization(login: $orgname) {
      id
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
