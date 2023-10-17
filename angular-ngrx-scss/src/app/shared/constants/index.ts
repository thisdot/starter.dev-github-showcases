import { FilterOption } from '../components/filter-dropdown/filter-dropdown.component';

export const SORTING_OPTIONS: FilterOption[] = [
  { label: 'Newest', value: 'created' },
  { label: 'Oldest', value: 'created-asc' },
  { label: 'Most commented', value: 'comments' },
  { label: 'Least commented', value: 'comments-asc' },
  { label: 'Recently updated', value: 'updated' },
  { label: 'Least recently updated', value: 'updated-asc' },
];
