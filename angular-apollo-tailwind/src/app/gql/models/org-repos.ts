import { ApolloQueryResult } from '@apollo/client/core';
import { ORDER_BY_DIRECTION, ORDER_BY_FIELD } from '@filter-store';
import { PageInfo } from './page-info';
import { Repos } from './user-repos';

export interface OrgReposData {
  organization: {
    id: string;
    repositories: OrgRepos;
  };
}

export interface OrgRepos {
  nodes: OrgRepo[];
  pageInfo: PageInfo;
}

export interface OrgRepo {
  id: string;
  name: string;
  description: string;
  stargazerCount: number;
  forkCount: number;
  isArchived: boolean;
  isFork: boolean;
  primaryLanguage: {
    id: string;
    color: string;
    name: string;
  };
  isPrivate: boolean;
  updatedAt: string;
}

export interface OrgReposVars {
  orgname: string;
  orderBy: {
    field: ORDER_BY_FIELD;
    direction: ORDER_BY_DIRECTION;
  };
  afterCursor?: string;
  beforeCursor?: string;
}

export interface OrgRepoDetails
  extends Partial<Repos>,
    ApolloQueryResult<OrgReposData> {}
