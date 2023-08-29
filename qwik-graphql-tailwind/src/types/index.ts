export interface Milestone {
  id: string;
  closed: boolean;
  description: string;
  number: number;
  title: string;
}

export interface PageInfo {
  startCursor?: string;
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface Label {
  color: string;
  name: string;
  description?: string;
}

export interface MilestoneProps {
  nodes: Milestone[];
  pageInfo: PageInfo;
  totalCount: number;
}

export interface LabelProps {
  totalCount: number;
  nodes: Label[];
}
