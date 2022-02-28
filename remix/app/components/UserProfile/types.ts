export interface OrganizationNodes {
  avatarUrl: any;
  login: string;
}

export interface Nodes {
  nodes: OrganizationNodes[];
}

export interface Follow {
  totalCount: number;
}
