export interface Repo {
  id: string;
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  isFork: boolean;
  isArchived: boolean;
  visibility: string;
  updatedAt: string;
  owner: {
    login: string;
  };
  primaryLanguage: {
    name: string;
    color: string;
  };
}

export interface PageInfo {
  endCursor?: string;
  startCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export interface UserRepoInfo {
  owner: {
    repositories: {
      nodes: Repo[];
      pageInfo: PageInfo;
    };
  };
}

export interface RepoInfoProps {
  pageInfo: PageInfo;
  repos: Repo[];
  owner?: string;
}

export interface RepoInfos extends RepoInfoProps {
  languages: string[];
}
