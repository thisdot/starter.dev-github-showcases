import { IssueOrderField, OrderDirection } from './type';

export const sortOptions = [
  {
    value: `${IssueOrderField.CreatedAt}^${OrderDirection.Desc}`,
    label: 'Newest',
  },
  {
    value: `${IssueOrderField.CreatedAt}^${OrderDirection.Asc}`,
    label: 'Oldest',
  },
  {
    value: `${IssueOrderField.Comments}^${OrderDirection.Desc}`,
    label: 'Most Commented',
  },
  {
    value: `${IssueOrderField.Comments}^${OrderDirection.Asc}`,
    label: 'Least Commented',
  },
  {
    label: 'Least recently updated',
    value: `${IssueOrderField.UpdatedAt}^${OrderDirection.Asc}`,
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
