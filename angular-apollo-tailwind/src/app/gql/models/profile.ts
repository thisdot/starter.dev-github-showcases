import { ApolloQueryResult } from '@apollo/client/core';

export interface UserProfileData {
  user: User;
}

export interface UserProfileVars {
  username: string;
}

export interface User {
  avatarUrl: string;
  bio: string;
  company: string;
  followers: {
    totalCount: number;
  };
  following: {
    totalCount: number;
  };
  location: string;
  login: string;
  name: string;
  organizations: {
    nodes: Organization[];
  };
  starredRepositories: {
    totalCount: number;
  };
  twitterUsername: string;
  websiteUrl: string;
}

export interface Organization {
  avatarUrl: string;
  login: string;
}

export interface UserProfile {
  avatarUrl: string;
  bio?: string | null;
  company?: string | null;
  location?: string | null;
  username: string;
  name?: string | null;
  twitterUsername?: string | null;
  websiteUrl?: string | null;
  followers: number;
  following: number;
  starredRepos: number;
  organizations: Organization[];
}

export interface UserProfileDetails
  extends Partial<UserProfile>,
    ApolloQueryResult<UserProfileData> {}
