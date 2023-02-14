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
    owner: User
    private: Boolean
    stargazers_count: Int
    title: String
    updated_at: String
  }

  """
  A User object used in Repo
  """
  type User {
    login: String
  }

  """
  An Owner object
  """
  type Owner {
    bio: String
    company: String
    email: String
    followers: String
    following: String
    location: String
    login: String
    name: String
    orgs: [Orgs]
    starred_url: String
    twitter_username: String
  }

  """
  An Organization object used in Owner
  """
  type Orgs {
    avatar_url: String
    login: String
    name: String
    members_url: String
    repos_url: String
  }

  """
  GitHub queries
  """
  type Query {
    owner: Owner
    repo(owner: String!, repoName: String!): Repo
    repos(username: String!, perPage: String): [Repo]
  }
`;
