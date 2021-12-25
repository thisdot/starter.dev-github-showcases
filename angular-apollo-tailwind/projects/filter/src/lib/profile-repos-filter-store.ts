import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  LanguageFilter,
  ORDER_BY_DIRECTION,
  ORDER_BY_FIELD,
  PaginatorOptions,
  TypeFilter,
} from './filter.models';

interface SortOption {
  field: ORDER_BY_FIELD;
  direction: ORDER_BY_DIRECTION;
}

export interface ProfileFilterState {
  sort: SortOption;
  query: string;
  language: string;
  type: TypeFilter;
  languages: LanguageFilter[];
  languagesLoaded: boolean;
  afterCursor?: string;
  beforeCursor?: string;
}

const INITIAL_STATE: ProfileFilterState = {
  sort: {
    field: ORDER_BY_FIELD.UpdatedAt,
    direction: ORDER_BY_DIRECTION.Desc,
  },
  type: TypeFilter.ALL,
  language: 'all',
  query: '',
  languages: [],
  languagesLoaded: false,
};

const TYPES_DICT: { [key: string]: TypeFilter } = {
  all: TypeFilter.ALL,
  forked: TypeFilter.FORKED,
  archived: TypeFilter.ARCHIVED,
};

const ORDER_BY_DICT: { [key: string]: ORDER_BY_FIELD } = {
  CREATED_AT: ORDER_BY_FIELD.CreatedAt,
  UPDATED_AT: ORDER_BY_FIELD.UpdatedAt,
  PUSHED_AT: ORDER_BY_FIELD.PushedAt,
  NAME: ORDER_BY_FIELD.Name,
  STARGAZERS: ORDER_BY_FIELD.Stargazers,
};

@Injectable()
export class ProfileReposFilterStore extends ComponentStore<ProfileFilterState> {
  constructor() {
    super(INITIAL_STATE);
  }
  // *********** Updaters *********** //

  readonly setSort = this.updater((state, value: string) => ({
    ...state,
    sort: {
      field: ORDER_BY_DICT[value],
      direction: ORDER_BY_DIRECTION.Desc,
    },
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setLanguage = this.updater((state, value: string) => ({
    ...state,
    language: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setType = this.updater((state, value: string) => ({
    ...state,
    type: TYPES_DICT[value],
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setQuery = this.updater((state, value: string) => ({
    ...state,
    query: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setLanguages = this.updater((state, values: LanguageFilter[]) => ({
    ...state,
    languages: values,
    afterCursor: undefined,
    beforeCursor: undefined,
    languagesLoaded: true,
  }));

  readonly setPage = this.updater(
    (state, { afterCursor, beforeCursor }: PaginatorOptions) => ({
      ...state,
      afterCursor,
      beforeCursor,
    }),
  );

  readonly clearFilters = this.updater((state) => ({
    ...state,
    sort: {
      field: ORDER_BY_FIELD.UpdatedAt,
      direction: ORDER_BY_DIRECTION.Desc,
    },
    type: TypeFilter.ALL,
    language: 'all',
    query: '',
  }));

  readonly setFiltersLoaded = this.updater((state, value: boolean) => ({
    ...state,
    filtersLoaded: value,
  }));

  // *********** Selectors *********** //

  readonly languages$ = this.select(({ languages }) => languages);

  readonly isQueryActive$ = this.select(({ query }) => query !== '');

  readonly isTypeActive$ = this.select(({ type }) => type !== TypeFilter.ALL);

  readonly isLanguageActive$ = this.select(
    ({ language }) => language !== 'all',
  );

  readonly hasActiveFilters$ = this.select(
    this.isQueryActive$,
    this.isTypeActive$,
    this.isLanguageActive$,
    (isQueryActive, isTypeActive, isLanguageActive) =>
      isQueryActive || isTypeActive || isLanguageActive,
  );
}
