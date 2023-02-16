export interface Profile {
  avatarUrl: string;
  name: string;
  username: string;
  bio: string;
  login: string;
  followers: { totalCount: number };
  following: { totalCount: number };
  starredRepositories: { totalCount: number };
  company: string;
  location: string;
  websiteUrl: string;
  twitterUsername: string;
  organizations: {
    nodes: {
      avatarUrl: string;
      name: string;
      login: string;
    }[];
  };
}
