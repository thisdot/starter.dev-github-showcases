import { SERVER_BASE_URL, WEB_REDIRECT_URI, MOBILE_REDIRECT_URI, GITHUB_URL } from '@env';
import { Platform } from 'react-native';
import RepoIcon from '../components/Icons/RepoIcon';

export const AUTH_URL = `${SERVER_BASE_URL}/.netlify/functions/signin?redirect_url=${
  Platform.OS === 'web' ? WEB_REDIRECT_URI : MOBILE_REDIRECT_URI
}`;
export const GITHUB_GRAPHQL = `${GITHUB_URL}/graphql`;

export const REPO_TABS = {
  code: 'Code',
  pull_requests: 'Pull Requests',
  issues: 'Issues',
};

export const OrderField = {
  /** Order issues by comment count */
  Comments: 'COMMENTS',
  /** Order issues by creation time */
  CreatedAt: 'CREATED_AT',
  /** Order issues by update time */
  UpdatedAt: 'UPDATED_AT',
};

export const PR_ISSUE_TABS = {
  open: 'open',
  closed: 'closed',
};

export const OrderDirection = {
  Asc: 'ASC',
  Desc: 'DESC',
};

export const tabs = [{ title: 'Repositories', Icon: RepoIcon }];

export const SORT_OPTIONS = {
  [`${OrderField.CreatedAt}^${OrderDirection.Desc}`]: 'Newest',
  [`${OrderField.CreatedAt}^${OrderDirection.Asc}`]: 'Oldest',
  [`${OrderField.Comments}^${OrderDirection.Desc}`]: 'Most commented',
  [`${OrderField.Comments}^${OrderDirection.Asc}`]: 'Least commented',
  [`${OrderField.UpdatedAt}^${OrderDirection.Desc}`]: 'Recently updated',
  [`${OrderField.UpdatedAt}^${OrderDirection.Asc}`]: 'Least reecently updated',
};

export const DEFAULT_PAGE_SIZE = 30;
