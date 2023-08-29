export * from './../routes/[user]/types';
export * from './../components/repo-card/types';
export * from './../components/user-repos/types';
export * from './../components/icons/types';
export * from './../components/tab-navigation/types';

export enum OrderField {
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
