import { gql } from 'apollo-angular';

export const USER_PROFILE_QUERY = gql`
  query UserProfile($username: String!) {
    user(login: $username) {
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
  }
`;
