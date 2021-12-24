import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  ISSUE_TYPE,
  SortOption,
  ORDER_FIELD,
  ORDER_BY_DIRECTION,
  OPEN_CLOSED_STATE,
} from './filter.models';

export interface FilterState {
  label: string;
  milestone: string;
  state: OPEN_CLOSED_STATE;
  type: ISSUE_TYPE;
  sort: SortOption;
  afterCursor?: string;
  beforeCursor?: string;
  filtersLoaded: boolean;
}

export interface PaginatorOptions {
  afterCursor: string;
  beforeCursor: string;
}

const INITIAL_STATE: FilterState = {
  label: '',
  milestone: '',
  state: OPEN_CLOSED_STATE.OPEN,
  type: ISSUE_TYPE.ISSUE,
  sort: {
    field: ORDER_FIELD.CREATED_AT,
    direction: ORDER_BY_DIRECTION.Desc,
  },
  filtersLoaded: false,
};

const ISSUE_ORDER_DICT: { [key: string]: ORDER_FIELD } = {
  COMMENTS: ORDER_FIELD.COMMENTS,
  CREATED_AT: ORDER_FIELD.CREATED_AT,
  UPDATED_AT: ORDER_FIELD.UPDATED_AT,
};

const DIRECTION_DICT: { [key: string]: ORDER_BY_DIRECTION } = {
  ASC: ORDER_BY_DIRECTION.Asc,
  DESC: ORDER_BY_DIRECTION.Desc,
};

@Injectable()
export class ReposFilterStore extends ComponentStore<FilterState> {
  constructor() {
    super(INITIAL_STATE);
  }
  // *********** Updaters *********** //

  readonly setMilestone = this.updater((state, value: string) => ({
    ...state,
    milestone: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setLabel = this.updater((state, value: string) => ({
    ...state,
    label: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly changeState = this.updater((state, value: OPEN_CLOSED_STATE) => ({
    ...state,
    state: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setSort = this.updater((state, value: string) => {
    const [field, direction] = value.split('^');
    return {
      ...state,
      sort: {
        field: ISSUE_ORDER_DICT[field],
        direction: DIRECTION_DICT[direction],
      },
      afterCursor: undefined,
      beforeCursor: undefined,
    };
  });

  readonly changePage = this.updater(
    (state, { afterCursor, beforeCursor }: PaginatorOptions) => ({
      ...state,
      afterCursor,
      beforeCursor,
    }),
  );

  readonly clearFilters = this.updater((state) => ({
    ...INITIAL_STATE,
    type: state.type,
  }));

  readonly setFiltersLoaded = this.updater((state, value: boolean) => ({
    ...state,
    filtersLoaded: value,
  }));

  // *********** Selectors *********** //

  readonly label$ = this.select(({ label }) => label);

  readonly milestone$ = this.select(({ milestone }) => milestone);

  readonly issueState$ = this.select(({ state }) => state);

  readonly type$ = this.select(({ type }) => type);

  readonly sort$ = this.select(({ sort }) => sort);

  readonly hasActiveFilters$ = this.select(
    this.label$,
    this.milestone$,
    this.sort$,
    (label, milestone, sort) =>
      label !== '' ||
      milestone !== '' ||
      sort.direction !== ORDER_BY_DIRECTION.Desc ||
      sort.field !== ORDER_FIELD.CREATED_AT,
  );

  readonly filtersLoaded$ = this.select(({ filtersLoaded }) => filtersLoaded);
}
