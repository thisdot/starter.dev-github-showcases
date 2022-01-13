import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  SortOption,
  ORDER_FIELD,
  ORDER_BY_DIRECTION,
  OPEN_CLOSED_STATE,
  PaginatorOptions,
  Label,
  Milestone,
} from './filter.models';

export interface FilterState {
  label: string;
  labels: Label[];
  milestone: string;
  milestones: Milestone[];
  state: OPEN_CLOSED_STATE;
  sort: SortOption;
  afterCursor?: string;
  beforeCursor?: string;
  labelsLoaded: boolean;
  milestonesLoaded: boolean;
}

const INITIAL_STATE: FilterState = {
  label: '',
  labels: [],
  milestone: '',
  milestones: [],
  state: OPEN_CLOSED_STATE.OPEN,
  sort: {
    field: ORDER_FIELD.CreatedAt,
    direction: ORDER_BY_DIRECTION.Desc,
  },
  labelsLoaded: false,
  milestonesLoaded: false,
};

const ORDER_DICT: { [key: string]: ORDER_FIELD } = {
  COMMENTS: ORDER_FIELD.Comments,
  CREATED_AT: ORDER_FIELD.CreatedAt,
  UPDATED_AT: ORDER_FIELD.UpdatedAt,
};

const DIRECTION_DICT: { [key: string]: ORDER_BY_DIRECTION } = {
  ASC: ORDER_BY_DIRECTION.Asc,
  DESC: ORDER_BY_DIRECTION.Desc,
};

@Injectable()
export class ReposFilterStore extends ComponentStore<FilterState> {
  // *********** Updaters *********** //

  readonly setLabel = this.updater((state, value: string) => ({
    ...state,
    label: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setLabels = this.updater((state, values: Label[]) => ({
    ...state,
    labels: values,
    labelsLoaded: true,
  }));

  readonly setMilestone = this.updater((state, value: string) => ({
    ...state,
    milestone: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setMilestones = this.updater((state, values: Milestone[]) => ({
    ...state,
    milestones: values,
    milestonesLoaded: true,
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
        field: ORDER_DICT[field],
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

  readonly clearFilters = this.updater(() => ({
    ...INITIAL_STATE,
  }));

  readonly setFiltersLoaded = this.updater((state, value: boolean) => ({
    ...state,
    filtersLoaded: value,
  }));

  // *********** Selectors *********** //

  readonly label$ = this.select(({ label }) => label);

  readonly labels$ = this.select(({ labels }) => labels);

  readonly milestone$ = this.select(({ milestone }) => milestone);

  readonly milestones$ = this.select(({ milestones }) => milestones);

  readonly issueState$ = this.select(({ state }) => state);

  readonly sort$ = this.select(({ sort }) => sort);

  readonly hasActiveFilters$ = this.select(
    this.label$,
    this.milestone$,
    this.sort$,
    (label, milestone, sort) =>
      label !== '' ||
      milestone !== '' ||
      sort.direction !== ORDER_BY_DIRECTION.Desc ||
      sort.field !== ORDER_FIELD.CreatedAt,
  );

  constructor() {
    super(INITIAL_STATE);
  }
}
