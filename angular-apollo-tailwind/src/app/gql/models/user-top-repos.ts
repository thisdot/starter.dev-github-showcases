import { ApolloQueryResult } from '@apollo/client/core';
import { ORDER_BY_FIELD, ORDER_BY_DIRECTION } from './order-by';

export interface UserTopReposData {
  viewer: {
    id: string;
    login: string;
    topRepositories: {
      nodes: UserTopRepo[];
    };
  };
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
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
}

export interface TopRepo {
  id: string;
  name: string;
  description: string;
  owner: string;
  language: string;
  languageColor: string;
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: Date;
}

export interface TopRepoDetials extends ApolloQueryResult<UserTopReposData> {
  repos: TopRepo[];
}
