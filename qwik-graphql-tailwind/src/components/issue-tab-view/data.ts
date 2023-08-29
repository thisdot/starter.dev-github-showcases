import { OrderDirection, OrderField } from '~/utils/types';

export const sortOptions = [
  {
    value: `${OrderField.CreatedAt}^${OrderDirection.Desc}`,
    label: 'Newest',
  },
  {
    value: `${OrderField.CreatedAt}^${OrderDirection.Asc}`,
    label: 'Oldest',
  },
  {
    value: `${OrderField.Comments}^${OrderDirection.Desc}`,
    label: 'Most Commented',
  },
  {
    value: `${OrderField.Comments}^${OrderDirection.Asc}`,
    label: 'Least Commented',
  },
  {
    label: 'Recently updated',
    value: `${OrderField.UpdatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least recently updated',
    value: `${OrderField.UpdatedAt}^${OrderDirection.Asc}`,
  },
];
