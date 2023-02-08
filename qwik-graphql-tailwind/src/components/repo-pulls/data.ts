import { OrderDirection, PullRequestOrderField } from './types';

export const sortOptions = [
  {
    value: `${PullRequestOrderField.CreatedAt}^${OrderDirection.Desc}`,
    label: 'Newest',
  },
  {
    value: `${PullRequestOrderField.CreatedAt}^${OrderDirection.Asc}`,
    label: 'Oldest',
  },
  {
    label: 'Most commented',
    value: `${PullRequestOrderField.Comments}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least commented',
    value: `${PullRequestOrderField.Comments}^${OrderDirection.Asc}`,
  },
  {
    label: 'Recently updated',
    value: `${PullRequestOrderField.UpdatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least reecently updated',
    value: `${PullRequestOrderField.UpdatedAt}^${OrderDirection.Asc}`,
  },
];
