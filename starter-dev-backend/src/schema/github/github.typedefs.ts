import gql from 'graphql-tag';

export const githubTypeDefs = gql`
  """
  A Repo object
  """
  type Repo {
    description: String
    forkCount: Int
    fullName: String
    id: ID
    language: String
    name: String
    owner: User
    private: Boolean
    stargazersCount: Int
    title: String
    updatedAt: String
    readme: String
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
    starCount: String
    twitterUsername: String
  }

  """
  An Organization object used in Owner
  """
  type Orgs {
    avatar: String
    login: String
    name: String
    membersCount: String
    reposCount: String
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
