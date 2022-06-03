export interface RepoOrganization {
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
  organizations: RepoOrganization[];
}

export interface ProfileDetails {
  owner: string;
  isOrg: boolean;
}
