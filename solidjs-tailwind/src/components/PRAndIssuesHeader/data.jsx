export const OrderField = {
  /** Order issues by comment count */
  Comments: 'COMMENTS',
  /** Order issues by creation time */
  CreatedAt: 'CREATED_AT',
  /** Order issues by update time */
  UpdatedAt: 'UPDATED_AT',
}

export const OrderDirection = {
  Asc: 'ASC',
  Desc: 'DESC',
}

export const SORT_OPTIONS = {
  [`${OrderField.CreatedAt}^${OrderDirection.Desc}`]: 'Newest',
  [`${OrderField.CreatedAt}^${OrderDirection.Asc}`]: 'Oldest',
  [`${OrderField.Comments}^${OrderDirection.Desc}`]: 'Most commented',
  [`${OrderField.Comments}^${OrderDirection.Asc}`]: 'Least commented',
  [`${OrderField.UpdatedAt}^${OrderDirection.Desc}`]: 'Recently updated',
  [`${OrderField.UpdatedAt}^${OrderDirection.Asc}`]: 'Least reecently updated',
}