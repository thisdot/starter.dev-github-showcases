import { gql } from 'graphql-request';
import { USER_REPOS_FRAGMENT } from './UserRepos';

// might be unnecessary due to Profile return from GitHubStrategy

const USER_PROFILE_FRAGMENT = gql`
  fragment userProfile on User {
    avatarUrl
    bio
    company
    followers(first: 0) {
      totalCount
    }
    following(first: 0) {
      totalCount
    }
    location
    login
    name
    organizations(first: 6) {
      nodes {
        avatarUrl
        login
      }
    }
    starredRepositories(first: 0) {
      totalCount
    }
    twitterUsername
    websiteUrl
  }
`;


export const USER_PROFILE_QUERY = gql`
  ${USER_PROFILE_FRAGMENT}

  query UserProfileQuery($username: String!) {
    user(login: $username) {
      ...userProfile
    }
  }
`;


export const FULL_USER_PROFILE_QUERY = gql`
  ${USER_PROFILE_FRAGMENT}
  ${USER_REPOS_FRAGMENT}

  query FullUserProfile(
    $username: String!
    $afterCursor: String
    $beforeCursor: String
    $orderBy: RepositoryOrder
  ) {
    user(login: $username) {
      ...userProfile
      ...userRepos
    }
  }
`;
