import gql from 'graphql-tag';

export const githubTypeDefs = gql`
  """
  WIP
  https://docs.github.com/en/rest/repos/repos?apiVersion=2022-11-28#list-repositories-for-a-user
  """
  type Repo {
    description: String
    forks_count: Int
    full_name: String
    id: ID
    language: String
    name: String
    owner: Owner
    private: Boolean
    stargazers_count: Int
    title: String
    updated_at: String
  }

  type Owner {
    login: String
  }

  #   type User {

  #   }

  type Query {
    repos(username: String): [Repo]
    # owner: User
  }
`;
