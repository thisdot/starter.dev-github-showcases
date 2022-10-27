import type { UserGistsState } from "./gists";
import type { UserReposState } from "./repositories";

export interface UserInfo {
  avatar: string;
  bio: string;
  blog: string;
  company: string;
  email: string;
  followers: number;
  following: number;
  location: string;
  name: string;
  twitter_username: string;
  username: string;
  type: string;
  topRepos?: UserReposState[];
  gists?: UserGistsState[];
}

export interface UserApiResponse {
  username: string,
  login: string,
  id: number,
  node_id: string,
  avatar_url: string,
  gravatar_id: string,
  url: string,
  html_url: string,
  followers_url: string,
  following_url: string,
  gists_url: string,
  starred_url: string,
  subscriptions_url: string,
  organizations_url: string,
  repos_url: string,
  events_url: string,
  received_events_url: string,
  type: string,
  site_admin: boolean,
  name: string,
  company: string | null,
  blog: string,
  location: string | null,
  email: string | null,
  hireable: boolean,
  bio: string,
  twitter_username: string | null,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number,
  created_at: string,
  updated_at: string
}

export enum ProfileType {
  Organization = 'Organization',
  User = 'User',
}

export interface UserOrg {
  login: string;
  id: number;
  node_id: string;
  url: string;
  repos_url: string;
  events_url: string;
  hooks_url: string;
  issues_url: string;
  members_url: string;
  public_members_url: string;
  avatar_url: string;
  description: string;
}

export type UserOrgsApiResponse = UserOrg[];

export interface UserOrgs {
  id: number;
  login: string;
  avatar_url: string;
}
