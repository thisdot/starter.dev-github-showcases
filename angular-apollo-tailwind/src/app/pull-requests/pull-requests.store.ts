import { Injectable } from '@angular/core';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { RouteConfigService } from '@this-dot/route-config';
import { Observable, switchMap, withLatestFrom } from 'rxjs';
import {
  IssueOrder,
  IssueOrderField,
  Label,
  Milestone,
  OrderDirection,
  PullRequestState,
  PULL_REQUESTS_TYPE,
  RepoPage,
  RepoPullRequests,
  RepoPullRequestsGQL,
} from '../gql';
import { parsePullRequestsQuery } from './parse-pull-requests';

export interface FilterState {
  label: string;
  labels: Label[];
  milestone: string;
  state: PullRequestState;
  type: PULL_REQUESTS_TYPE;
  sort: IssueOrder;
  endCursor?: string;
  startCursor?: string;
  milestones: Milestone[] | null;
  openPullRequests: RepoPullRequests | null;
  closedPullRequests: RepoPullRequests | null;
}

const INITIAL_STATE: FilterState = {
  label: '',
  labels: [],
  milestone: '',
  state: PullRequestState.Open,
  type: PULL_REQUESTS_TYPE.PULL_REQUEST,
  sort: {
    field: IssueOrderField.CreatedAt,
    direction: OrderDirection.Desc,
  },
  milestones: null,
  openPullRequests: null,
  closedPullRequests: null,
};

const PULL_REQUESTS_ORDER_DICT: { [key: string]: IssueOrderField } = {
  COMMENTS: IssueOrderField.Comments,
  CREATED_AT: IssueOrderField.CreatedAt,
  UPDATED_AT: IssueOrderField.UpdatedAt,
};

const DIRECTION_DICT: { [key: string]: OrderDirection } = {
  ASC: OrderDirection.Asc,
  DESC: OrderDirection.Desc,
};

interface GenericLabel {
  [key: string]: Label;
}

@Injectable()
export class PullRequestsStore extends ComponentStore<FilterState> {
  constructor(
    private routeConfigService: RouteConfigService<string, 'repoPageData'>,
    private repoPullRequestsGQL: RepoPullRequestsGQL,
  ) {
    super(INITIAL_STATE);
  }
  // *********** Updaters *********** //

  readonly setMilestone = this.updater((state, value: string) => ({
    ...state,
    milestone: value,
    endCursor: undefined,
    startCursor: undefined,
  }));

  readonly setMilestones = this.updater((state, values: Milestone[]) => ({
    ...state,
    milestones: values,
  }));

  readonly setLabel = this.updater((state, value: string) => ({
    ...state,
    label: value,
    endCursor: undefined,
    startCursor: undefined,
  }));

  readonly changeState = this.updater((state, value: PullRequestState) => ({
    ...state,
    state: value,
    endCursor: undefined,
    startCursor: undefined,
  }));

  readonly setSort = this.updater((state, value: string) => {
    const [field, direction] = value.split('^');
    return {
      ...state,
      sort: {
        field: PULL_REQUESTS_ORDER_DICT[field],
        direction: DIRECTION_DICT[direction],
      },
      endCursor: undefined,
      startCursor: undefined,
    };
  });

  readonly changePage = this.updater((state, { before, after }: any) => ({
    ...state,
    endCursor: after as string,
    startCursor: before as string,
  }));

  readonly resetState = this.updater((state) => ({
    ...INITIAL_STATE,
    type: state.type,
  }));

  readonly setOpenPullRequests = this.updater(
    (state, values: RepoPullRequests) => ({
      ...state,
      openPullRequests: {
        ...values,
      },
    }),
  );

  readonly setClosedPullRequests = this.updater(
    (state, values: RepoPullRequests) => ({
      ...state,
      closedPullRequests: {
        ...values,
      },
    }),
  );

  // *********** Selectors *********** //

  readonly label$ = this.select(({ label }) => label);

  readonly labels$ = this.select(
    ({ labels: activePullRequestsLabels }) => activePullRequestsLabels,
  );

  readonly milestone$ = this.select(({ milestone }) => milestone);

  readonly milestones$ = this.select(({ milestones }) => milestones);

  readonly pullRequestState$ = this.select(({ state }) => state);

  readonly type$ = this.select(({ type }) => type);

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

  readonly openPullRequests$ = this.select(
    ({ openPullRequests }) => openPullRequests,
  );

  readonly openPullRequestsCount$ = this.select(
    this.openPullRequests$,
    (pullRequests) => pullRequests?.totalCount,
  );

  readonly closedPullRequests$ = this.select(
    ({ closedPullRequests }) => closedPullRequests,
  );

  readonly closedPullRequestsCount$ = this.select(
    this.closedPullRequests$,
    (pullRequests) => pullRequests?.totalCount,
  );

  readonly activePullRequests$ = this.select(
    this.pullRequestState$,
    this.openPullRequests$,
    this.closedPullRequests$,
    (state, openPullRequests, closedPullRequests) =>
      state === PullRequestState.Open ? openPullRequests : closedPullRequests,
  );

  readonly pageInfo$ = this.select(
    this.activePullRequests$,
    (activePullRequests) => activePullRequests?.pageInfo,
  );

  // *********** Effects *********** //

  readonly getPullRequests$ = this.effect((target$: Observable<void>) =>
    target$.pipe(
      withLatestFrom(this.state$),
      switchMap(([, { label, sort, endCursor, startCursor }]) =>
        this.routeConfigService.getLeafConfig<RepoPage>('repoPageData').pipe(
          switchMap(({ owner, name }) =>
            this.repoPullRequestsGQL
              .watch({
                owner,
                name,
                orderBy: sort ?? undefined,
                labels: label ? [label] : undefined,
                after: endCursor ?? undefined,
                before: startCursor ?? undefined,
              })
              .valueChanges.pipe(
                tapResponse(
                  (res) => {
                    const { openPullRequests, closedPullRequests } =
                      parsePullRequestsQuery(res.data);

                    this.setOpenPullRequests(openPullRequests);
                    this.setClosedPullRequests(closedPullRequests);
                  },
                  (error) => {
                    console.log(error);
                  },
                ),
              ),
          ),
        ),
      ),
    ),
  );
}
