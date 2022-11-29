import gql from 'graphql-tag';

export const githubTypeDefs = gql`

  type Repo {
        
  }

  type Query {
    repos(username: String): Repo
    # owner()
  }
`;
