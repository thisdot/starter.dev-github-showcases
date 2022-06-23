interface Edges {
  node: {
    name: string;
    description: string;
    url: string;
    forkCount: number;
    stargazerCount: number;
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
