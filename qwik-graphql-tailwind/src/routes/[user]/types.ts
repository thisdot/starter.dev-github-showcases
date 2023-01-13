export interface OrganizationNodes {
  avatarUrl: any;
  login: string;
}

export interface Follow {
  totalCount: number;
}

export interface Nodes {
  nodes: OrganizationNodes[];
}

export interface User {
  avatarUrl: any;
  bio?: string | null;
  company?: string | null;
  location?: string | null;
  login: string;
  name?: string | null;
  twitterUsername?: string | null;
  websiteUrl?: string | null;
  followers: Follow;
  following: Follow;
  starredRepositories: Follow;
  organizations: Nodes;
}
