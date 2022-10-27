export enum RepositoryOrderField {
  CreatedAt = 'CREATED_AT',
  Name = 'NAME',
  PushedAt = 'PUSHED_AT',
  Stargazers = 'STARGAZERS',
  UpdatedAt = 'UPDATED_AT',
}

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC',
}

// export type FiltersAPI = ReturnType<typeof useRepoFilters>;

export enum TypeFilter {
  ALL = 'all',
  FORKS = 'forked',
  ARCHIVED = 'archived',
}

export interface LanguageFilter {
  label: string;
  value: string;
}

export enum ActionType {
  CHANGE_SORT,
  CHANGE_LANGUAGE,
  CHANGE_TYPE,
  SET_QUERY,
  SET_LANGUAGES,
  RESET_FILTERS,
}

export interface FilterState {
  sort: RepositoryOrderField;
  query: string;
  language: string;
  type: TypeFilter;
  languages?: LanguageFilter[];
}
