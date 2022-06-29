import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  RepositoryOrderField,
  OrderDirection,
  PageInfo,
  RepositoryOrder,
  PaginationEvent,
} from '../../../../src/app/gql';
import { LanguageFilter, TypeFilter } from './filter.models';

export interface ProfileFilterState {
  sort: RepositoryOrder;
  query: string;
  type: TypeFilter;
  language: string;
  languages: LanguageFilter[];
  languagesLoaded: boolean;
  beforeCursor?: string;
  afterCursor?: string;
  first?: number;
  last?: number;
}

const INITIAL_STATE: ProfileFilterState = {
  sort: {
    field: RepositoryOrderField.UpdatedAt,
    direction: OrderDirection.Desc,
  },
  type: TypeFilter.ALL,
  language: 'all',
  query: '',
  languages: [],
  languagesLoaded: false,
  first: 10,
  last: undefined,
};

const TYPES_DICT: { [key: string]: TypeFilter } = {
  all: TypeFilter.ALL,
  forked: TypeFilter.FORKED,
  archived: TypeFilter.ARCHIVED,
};

const ORDER_BY_DICT: { [key: string]: RepositoryOrderField } = {
  CREATED_AT: RepositoryOrderField.CreatedAt,
  UPDATED_AT: RepositoryOrderField.UpdatedAt,
  NAME: RepositoryOrderField.Name,
  STARGAZERS: RepositoryOrderField.Stargazers,
};

@Injectable()
export class ProfileReposFilterStore extends ComponentStore<ProfileFilterState> {
  // *********** Updaters *********** //

  readonly setSort = this.updater((state, value: string) => ({
    ...state,
    sort: {
      field: ORDER_BY_DICT[value],
      direction: OrderDirection.Desc,
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
    (state, { startCursor, endCursor }: PageInfo) => ({
      ...state,
      beforeCursor: startCursor as string,
      afterCursor: endCursor as string,
    }),
  );

  readonly clearFilters = this.updater((state) => ({
    ...state,
    sort: {
      field: RepositoryOrderField.UpdatedAt,
      direction: OrderDirection.Desc,
    },
    type: TypeFilter.ALL,
    language: 'all',
    query: '',
  }));

  readonly setFiltersLoaded = this.updater((state, value: boolean) => ({
    ...state,
    filtersLoaded: value,
  }));

  readonly changePage = this.updater(
    (state, { before, after }: PaginationEvent) => ({
      ...state,
      afterCursor: after as string,
      beforeCursor: before as string,
      first: after ? 10 : undefined,
      last: before ? 10 : undefined,
    }),
  );

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

  constructor() {
    super(INITIAL_STATE);
  }
}
