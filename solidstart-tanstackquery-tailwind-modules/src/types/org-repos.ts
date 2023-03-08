import { Repo } from './user-repo-type';
export interface PageInfo {
  endCursor?: string;
  startCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface OrgRepoInfo {
  organization: {
    avatarUrl: string;
    name: string;
    repositories: {
      nodes: Repo[];
      pageInfo: PageInfo;
    };
  };
}
