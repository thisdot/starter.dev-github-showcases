import { Repo, PageInfo as UserPageInfo } from './user-repos-type';

export type PageInfo = UserPageInfo;
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
