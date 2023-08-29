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
    label: 'Most commented',
    value: `${OrderField.Comments}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least commented',
    value: `${OrderField.Comments}^${OrderDirection.Asc}`,
  },
  {
    label: 'Recently updated',
    value: `${OrderField.UpdatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least reecently updated',
    value: `${OrderField.UpdatedAt}^${OrderDirection.Asc}`,
  },
];
