import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import {
  IssueOrder,
  IssueOrderField,
  IssueState,
  Label,
  Milestone,
  OrderDirection,
} from '../../gql';

export interface FilterState {
  label: string;
  labels: Label[];
  milestone: string;
  milestones: Milestone[];
  state: IssueState;
  sort: IssueOrder;
  startCursor?: string;
  endCursor?: string;
  labelsLoaded: boolean;
  milestonesLoaded: boolean;
}

const INITIAL_STATE: FilterState = {
  label: '',
  labels: [],
  milestone: '',
  milestones: [],
  state: IssueState.Open,
  sort: {
    field: IssueOrderField.CreatedAt,
    direction: OrderDirection.Desc,
  },
  labelsLoaded: false,
  milestonesLoaded: false,
};

const ORDER_DICT: { [key: string]: IssueOrderField } = {
  COMMENTS: IssueOrderField.Comments,
  CREATED_AT: IssueOrderField.CreatedAt,
  UPDATED_AT: IssueOrderField.UpdatedAt,
};

const DIRECTION_DICT: { [key: string]: OrderDirection } = {
  ASC: OrderDirection.Asc,
  DESC: OrderDirection.Desc,
};

@Injectable()
export class ReposFilterStore extends ComponentStore<FilterState> {
  constructor() {
    super(INITIAL_STATE);
  }

  // *********** Updaters *********** //

  readonly setLabel = this.updater((state, value: string) => ({
    ...state,
    label: value,
  }));

  readonly setLabels = this.updater((state, values: Label[]) => ({
    ...state,
    labels: values,
    labelsLoaded: true,
  }));

  readonly setMilestone = this.updater((state, value: string) => ({
    ...state,
    milestone: value,
  }));

  readonly setMilestones = this.updater((state, values: Milestone[]) => ({
    ...state,
    milestones: values,
    milestonesLoaded: true,
  }));

  readonly changeState = this.updater((state, value: IssueState) => ({
    ...state,
    state: value,
  }));

  readonly setSort = this.updater((state, value: string) => {
    const [field, direction] = value.split('^');
    return {
      ...state,
      sort: {
        field: ORDER_DICT[field],
        direction: DIRECTION_DICT[direction],
      },
    };
  });

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
      sort.direction !== OrderDirection.Desc ||
      sort.field !== IssueOrderField.CreatedAt,
  );
}
