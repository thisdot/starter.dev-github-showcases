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
    label: 'Recently updated',
    value: `${IssueOrderField.UpdatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least recently updated',
    value: `${IssueOrderField.UpdatedAt}^${OrderDirection.Asc}`,
  },
];
