import { ApolloQueryResult } from '@apollo/client/core';
import { ORDER_BY_DIRECTION, ORDER_BY_FIELD } from './order-by';
import { PageInfo } from './page-info';

export interface UserReposData {
  user: {
    id: string;
    repositories: UserRepos;
  };
}

export interface UserRepos {
  nodes: UserRepo[];
  pageInfo: PageInfo;
}

export interface UserRepo {
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

export interface UserReposVars {
  username: string;
  orderBy: {
    field: ORDER_BY_FIELD;
    direction: ORDER_BY_DIRECTION;
  };
  afterCursor?: string;
  beforeCursor?: string;
}

export interface Repo {
  id: string;
  name: string;
  description: string;
  languageColor: string;
  language: string;
  isPrivate: boolean;
  isArchived: boolean;
  isFork: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

export interface Repos {
  owner: string;
  repos: Repo[];
  pageInfo: PageInfo;
}

export interface UserRepoDetails
  extends Partial<Repos>,
    ApolloQueryResult<UserReposData> {}
