export interface Edges {
  node: {
    id: string;
    name: string;
    description: string;
    url: string;
    forkCount: number;
    stargazerCount: number;
    isArchived: boolean;
    isFork: boolean;
    primaryLanguage: {
      color: string;
      name: string;
      id: string;
    };
    updatedAt: string;
    visibility: string;
  };
}

interface Repositories {
  edges: Array<Edges | null>;
}

export interface OrganizationRepositories {
  repositories: Repositories | null;
}
