export enum TypeFilter {
  All = 'all',
  Forked = 'forked',
  Archived = 'archived',
}

export enum OrderField {
  UpdatedAt = 'update_at',
  Name = 'name',
  Stargazers = 'stargazers_count',
}

export const TYPE_FILTERS = [
  {
    label: 'All',
    value: TypeFilter.All,
  },
  {
    label: 'Forks',
    value: TypeFilter.Forked,
  },
  {
    label: 'Archived',
    value: TypeFilter.Archived,
  },
];

export const SORT_ITEMS = [
  {
    label: 'Last updated',
    value: OrderField.UpdatedAt,
  },
  { value: OrderField.Name, label: 'Name' },
  { value: OrderField.Stargazers, label: 'Stars' },
];
