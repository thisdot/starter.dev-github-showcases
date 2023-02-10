export interface UserProfile {
  avatarUrl: string;
  bio: string;
  company: string;
  username: string;
  followers: number;
  following: number;
  location: string;
  login: string;
  name: string;
  organizations: {
    nodes: {
      avatarUrl: string;
      login: string;
      name: string;
    }[];
  };
  starredRepos: number;
  twitterUsername: string;
  websiteUrl: string;
}
