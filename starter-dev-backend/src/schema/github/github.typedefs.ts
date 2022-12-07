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
    isPrivate: Boolean
    language: String
    name: String
    owner: User
    stargazersCount: Int
    title: String
    updatedAt: String
  }

  """
  A Owner object used in Repo
  """
  type User {
    login: String
  }

  """
  A User object
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
    orgs: [Org]
    starCount: String
    twitterUsername: String
  }

  """
  A Organization object used in Owner
  """
  type Org {
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
