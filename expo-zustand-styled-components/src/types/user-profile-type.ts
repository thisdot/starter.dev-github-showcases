export interface ViewerInfo {
  login: string;
  name: string;
  avatarUrl: string;
}

export interface UserProfile extends ViewerInfo {
    username: string;
    bio: string;
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
