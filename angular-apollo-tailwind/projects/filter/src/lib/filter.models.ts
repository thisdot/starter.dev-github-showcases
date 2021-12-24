export interface Label {
  color: string;
  name: string;
}

export enum ISSUE_TYPE {
  ISSUE = 'issue',
  PULL_REQUEST = 'pull',
}

export const enum ORDER_FIELD {
  COMMENTS = 'COMMENTS',
  CREATED_AT = 'CREATED_AT',
  UPDATED_AT = 'UPDATED_AT',
}

export enum ORDER_BY_FIELD {
  UpdatedAt = 'UPDATED_AT',
  CreatedAt = 'CREATED_AT',
  PushedAt = 'PUSHED_AT',
  Name = 'NAME',
  Stargazers = 'STARGAZERS',
}

export enum OPEN_CLOSED_STATE {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export enum ORDER_BY_DIRECTION {
  Asc = 'ASC',
  Desc = 'DESC',
}

export interface SortOption {
  field: ORDER_FIELD;
  direction: ORDER_BY_DIRECTION;
}

export interface Milestone {
  id: string;
  closed: boolean;
  description: string;
  number: number;
  title: string;
}

export interface PageInfo {
  hasNextPage: boolean;
  endCursor: string;
  hasPreviousPage: boolean;
  startCursor: string;
}

export interface Milestones {
  nodes: Milestone[];
  pageInfo: PageInfo;
  totalCount: number;
}
