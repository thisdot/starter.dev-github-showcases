export const API_URL = import.meta.env.VITE_API_URL;
export const APP_BASE_URL = import.meta.env.VITE_BASE_URL;
export const GITHUB_URL_BASE = import.meta.env.VITE_GITHUB_URL;

export const REDIRECT_URL = `${APP_BASE_URL}/auth/redirect`;

export const SIGN_IN_BASE_URL = `${API_URL}/auth/signin`;
export const SIGN_OUT_URL = `${API_URL}/auth/signout`;

export const GITHUB_GRAPHQL = `${GITHUB_URL_BASE}/graphql`;

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

export const DEFAULT_PAGE_SIZE = 30