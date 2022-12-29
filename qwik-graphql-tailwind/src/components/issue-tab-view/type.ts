export interface Issue {
  url: string;
  closedAt: string;
  comments: {
    totalCount: number;
  };
  createdAt: string;
  number: number;
  state: string;
  title: string;
  author: {
    login: string;
  };
}

export enum IssueOrderField {
  /** Order issues by comment count */
  Comments = 'COMMENTS',
  /** Order issues by creation time */
  CreatedAt = 'CREATED_AT',
  /** Order issues by update time */
  UpdatedAt = 'UPDATED_AT',
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}
