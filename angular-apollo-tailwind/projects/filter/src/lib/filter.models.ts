export interface Label {
  color: string;
  name: string;
}

export const enum ORDER_FIELD {
  Comments = 'COMMENTS',
  CreatedAt = 'CREATED_AT',
  UpdatedAt = 'UPDATED_AT',
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

export interface PaginatorOptions {
  afterCursor: string;
  beforeCursor: string;
}

export enum TypeFilter {
  ALL = 'all',
  FORKED = 'forked',
  ARCHIVED = 'archived',
}

export interface LanguageFilter {
  label: string;
  value: string;
}
