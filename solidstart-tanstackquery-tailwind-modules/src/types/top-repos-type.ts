export interface TopRepositories {
  viewer: {
    login: string;
    topRepositories: {
      nodes: TopRepository[];
    };
  };
}

export type TopRepository = {
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
  visibility: string;
  isPrivate: boolean;
  stargazerCount: number;
  forkCount: number;
  updatedAt: string;
};
