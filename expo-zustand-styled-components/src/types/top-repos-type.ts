import { Repo } from './user-repos-type';

export interface TopRepositories {
  viewer: {
    login: string;
    topRepositories: {
      nodes: TopRepository[];
    };
  };
}

export type TopRepository = Repo;
