export interface Milestone {
  id: string;
  closed: boolean;
  description?: string | null;
  number: number;
  title: string;
}

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor?: string;
};
