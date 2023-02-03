export interface Repository {
  name: string;
  description: string;
  url: string;
  forkCount: number;
  stargazerCount: number;
  primaryLanguage: {
    color: string;
    name: string;
    id: string;
  };
  updatedAt: string;
  owner: {
    login: string;
  };
  visibility: string;
}

export interface OrgRepoInfo {
  organization: {
    avatarUrl: string;
    name: string;
    repositories: Repository[];
  };
}
