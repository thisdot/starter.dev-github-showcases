import gql from 'graphql-tag';

export const githubTypeDefs = gql`
  """
  A Repo object
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

  """
  A Owner object used in Repo
  """
  type Owner {
    login: String
  }

  """
  A User object
  """
  type User {
    bio: String
    company: String
    email: String
    followers: String
    following: String
    location: String
    login: String
    name: String
    twitter_username: String
  }

  """
  GitHub queries
  """
  type Query {
    repos(username: String!, perPage: String): [Repo]
    repo(owner: String!, repoName: String!): Repo
    owner: User
  }
`;
