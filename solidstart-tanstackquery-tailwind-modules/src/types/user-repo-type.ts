export interface UserRepo {
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
  endCursor?: string | null;
  startCursor?: string | null;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}
export interface UserRepoInfo {
  owner: {
    repositories: {
      nodes: UserRepo[];
      pageInfo: PageInfo;
    };
  };
}
