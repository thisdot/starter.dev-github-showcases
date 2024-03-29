import { ApolloQueryResult } from '@apollo/client/core';
import { ORDER_BY_FIELD, ORDER_BY_DIRECTION } from './OrderBy';

export interface UserTopReposData {
  id: string;
  login: string;
  topRepositories: UserTopRepo[];
}

export interface UserTopReposVars {
  first: number;
  orderBy: { field: ORDER_BY_FIELD; direction: ORDER_BY_DIRECTION };
}

export interface UserTopRepo {
  id: string;
  name: string;
  description: string;
  owner: {
    login: string;
  };
  primaryLanguage: {
    name: string;
    color: string;
  };
  isPrivate: boolean;
  visibility: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
  nameWithOwner: string;
}

export interface TopRepo {
  id: string;
  name: string;
  description: string;
  owner: string;
  language: string;
  languageColor: string;
  isPrivate: boolean;
  visibility: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

export interface TopRepoDetials extends ApolloQueryResult<UserTopReposData> {
  repos: TopRepo[];
}
