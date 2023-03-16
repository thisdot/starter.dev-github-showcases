import { Repo } from './user-repos-type';

export interface PageInfo {
  endCursor?: string | null;
  startCursor?: string | null;
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

export type OrgReposVariable = {
  organization: string;
  afterCursor?: string;
  beforeCursor?: string;
  orderBy: { field: string; direction: string };
  first: number;
  last?: number;
};
