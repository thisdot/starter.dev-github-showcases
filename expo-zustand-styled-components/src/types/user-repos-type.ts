export interface Repo {
  id: string;
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
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

export type UserReposVariables = {
  username: string;
  afterCursor?: string;
  beforeCursor?: string;
  orderBy: { field: string; direction: string };
  first: number;
  last?: number;
};
