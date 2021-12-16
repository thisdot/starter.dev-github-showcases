import { ORDER_BY_FIELD, ORDER_BY_DIRECTION } from './order-by';

export interface CurrentUserReposData {
  viewer: {
    id: string; // needed for InmemoryCache merging `viewer` query
    repositories: {
      nodes: CurrentUserRepos[];
    };
  };
}

export interface CurrentUserReposVars {
  first: number;
  orderBy: { field: ORDER_BY_FIELD; direction: ORDER_BY_DIRECTION };
}

export interface CurrentUserRepos {
  id: string;
  name: string;
  url: string;
  description: string;
  isPrivate: boolean;
  forkCount: number;
  stargazerCount: number;
  watchers: {
    totalCount: number;
  };
  primaryLanguage: {
    name: string;
    color: string;
  };
  updatedAt: Date;
  owner: {
    login: string;
  };
}
