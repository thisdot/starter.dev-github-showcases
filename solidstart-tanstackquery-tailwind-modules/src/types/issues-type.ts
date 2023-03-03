export interface MilestoneProps {
  id: string;
  closed: boolean;
  description: string;
  number: number;
  title: string;
}

export interface LabelProps {
  color: string;
  name: string;
}

export interface PageInfo {
  startCursor?: string;
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface IssueProps {
  totalCount: number;
  pageInfo: PageInfo;
  nodes: IssueNodeProps[];
}

export interface IssueNodeProps {
  state: string;
  createdAt: string;
  closedAt: string;
  title: string;
  author: {
    login: string;
  };
  url: string;
  labels: {
    totalCount: number;
    nodes: LabelProps[];
  };
  comments: {
    totalCount: number;
  };
  number: number;
}

export interface IssuesInfo {
  repository: {
    milestones: {
      nodes: MilestoneProps[];
      pageInfo: PageInfo;
      totalCount: number;
    };
    labels: {
      totalCount: number;
      nodes: LabelProps[];
    };
    openIssues: IssueProps;
    closedIssues: IssueProps;
  };
}

export interface Issue {
  login: string;
  commentCount: number;
  labelCount: number;
  labels: LabelProps[];
  title: string;
  number: number;
  createdAt: string;
  closedAt: string;
  state: string;
  url: string;
}

export type Variables = {
  owner: string;
  name: string;
  orderBy?: string;
  direction?: string;
  filterBy?: {
    assignee?: string;
    createdBy?: string;
    mentioned?: string;
    milestone?: string;
    labels?: (string | undefined)[];
    states?: 'OPEN' | 'CLOSED';
  };
  before?: string;
  after?: string;
  first?: number;
  last?: number;
};

export type Response = {
  data: IssuesInfo;
};
