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

export const labelOptions = [
  {
    value: 'enhancement',
    label: 'enhancement',
    color: '#a2eeef',
    description: 'New feature or request',
  },
  {
    value: 'WIP DO NOT MERGE',
    label: 'WIP DO NOT MERGE',
    color: '#FA3C07',
  },
  {
    value: 'invalid',
    label: 'invalid',
    color: '#e4e669',
    description: "This doesn't seem right",
  },
];

export const milestonesOptions = [
  {
    value: 'Issue With No Milestone',
    label: 'Issue With No Milestone',
  },
];
