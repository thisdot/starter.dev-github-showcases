import { Injectable } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap, withLatestFrom } from 'rxjs';
import {
  Label,
  SortPullOption,
  PullRequestsFormatted,
  ORDER_BY_DIRECTION,
  PullRequests,
  Milestones,
  PullRequest,
  ResolvedRepoDetails,
  RepoPullRequestsData,
  RepoPullRequestsVars,
  REPO_PULLS_QUERY,
  PULL_REQUESTS_ORDER_FIELD,
  OPEN_CLOSED_STATE,
  PULL_REQUESTS_TYPE,
} from '../gql';

export interface FilterState {
  label: string;
  labels: Label[];
  milestone: string;
  state: OPEN_CLOSED_STATE;
  type: PULL_REQUESTS_TYPE;
  sort: SortPullOption;
  afterCursor?: string;
  beforeCursor?: string;
  milestones: Milestones | null;
  openPullRequests: PullRequestsFormatted | null;
  closedPullRequests: PullRequestsFormatted | null;
}

export interface PaginatorOptions {
  afterCursor: string;
  beforeCursor: string;
}

const INITIAL_STATE: FilterState = {
  label: '',
  labels: [],
  milestone: '',
  state: OPEN_CLOSED_STATE.OPEN,
  type: PULL_REQUESTS_TYPE.PULL_REQUEST,
  sort: {
    field: PULL_REQUESTS_ORDER_FIELD.CREATED_AT,
    direction: ORDER_BY_DIRECTION.Desc,
  },
  milestones: null,
  openPullRequests: null,
  closedPullRequests: null,
};

const PULL_REQUESTS_ORDER_DICT: { [key: string]: PULL_REQUESTS_ORDER_FIELD } = {
  COMMENTS: PULL_REQUESTS_ORDER_FIELD.COMMENTS,
  CREATED_AT: PULL_REQUESTS_ORDER_FIELD.CREATED_AT,
  UPDATED_AT: PULL_REQUESTS_ORDER_FIELD.UPDATED_AT,
};

const DIRECTION_DICT: { [key: string]: ORDER_BY_DIRECTION } = {
  ASC: ORDER_BY_DIRECTION.Asc,
  DESC: ORDER_BY_DIRECTION.Desc,
};

interface GenericLabel {
  [key: string]: Label;
}

const parsePullRequests = (values: PullRequests) =>
  values.nodes.map((pull) => ({
    ...pull,
    createdAt: new Date(pull.createdAt),
    closedAt: pull.closedAt ? new Date(pull.closedAt) : undefined,
    mergedAt: new Date(pull.mergedAt),
  }));

@Injectable()
export class PullRequestsStore extends ComponentStore<FilterState> {
  constructor(
    private routeConfigService: RouteConfigService<string, 'userDetails'>,
    private apollo: Apollo,
  ) {
    super(INITIAL_STATE);
  }
  // *********** Updaters *********** //

  readonly setMilestone = this.updater((state, value: string) => ({
    ...state,
    milestone: value,
    afterCursor: undefined,
    beforeCursor: undefined,
  }));

  readonly setMilestones = this.updater((state, values: Milestones) => ({
    ...state,
    milestones: values,
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
        field: PULL_REQUESTS_ORDER_DICT[field],
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

  readonly resetState = this.updater((state) => ({
    ...INITIAL_STATE,
    type: state.type,
  }));

  readonly setOpenPullRequests = this.updater(
    (state, values: PullRequests) => ({
      ...state,
      openPullRequests: {
        ...values,
        nodes: parsePullRequests(values),
      },
    }),
  );

  readonly setClosedPullRequests = this.updater(
    (state, values: PullRequests) => ({
      ...state,
      closedPullRequests: {
        ...values,
        nodes: parsePullRequests(values),
      },
    }),
  );

  readonly setActivePullRequestsLabels = this.updater(
    (state, values: PullRequest[]) => {
      const labelsMap: GenericLabel = values.reduce(
        (acc: GenericLabel, pullRequest) => {
          const map: GenericLabel = {};
          pullRequest.labels.nodes.forEach((label) => {
            map[label.name] = label;
          });

          return {
            ...acc,
            ...map,
          };
        },
        {},
      );

      return {
        ...state,
        labels: Object.values(labelsMap),
      };
    },
  );

  // *********** Selectors *********** //

  readonly label$ = this.select(({ label }) => label);

  readonly labels$ = this.select(
    ({ labels: activePullRequestsLabels }) => activePullRequestsLabels,
  );

  readonly milestone$ = this.select(({ milestone }) => milestone);

  readonly milestones$ = this.select(({ milestones }) => milestones?.nodes);

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
      sort.direction !== ORDER_BY_DIRECTION.Desc ||
      sort.field !== PULL_REQUESTS_ORDER_FIELD.CREATED_AT,
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
      state === OPEN_CLOSED_STATE.OPEN
        ? (openPullRequests as PullRequestsFormatted)
        : (closedPullRequests as PullRequestsFormatted),
  );

  readonly pageInfo$ = this.select(
    this.activePullRequests$,
    (activePullRequests) => activePullRequests?.pageInfo,
  );

  // *********** Effects *********** //

  readonly getPullRequests$ = this.effect((target$: Observable<void>) =>
    target$.pipe(
      withLatestFrom(this.state$),
      switchMap(([, { label, sort, afterCursor, beforeCursor }]) =>
        this.routeConfigService
          .getLeafConfig<ResolvedRepoDetails>('userDetails')
          .pipe(
            switchMap(({ owner, name }) =>
              this.apollo
                .watchQuery<RepoPullRequestsData, RepoPullRequestsVars>({
                  query: REPO_PULLS_QUERY,
                  variables: {
                    owner,
                    name,
                    orderBy: sort ?? undefined,
                    labels: label ? [label] : undefined,
                    after: afterCursor ?? undefined,
                    before: beforeCursor ?? undefined,
                  },
                })
                .valueChanges.pipe(
                  tapResponse(
                    (res) => {
                      const { openPullRequests, closedPullRequests } =
                        res.data.repository;

                      this.setOpenPullRequests(openPullRequests);
                      this.setClosedPullRequests(closedPullRequests);
                      this.setActivePullRequestsLabels([
                        ...openPullRequests.nodes,
                        ...closedPullRequests.nodes,
                      ]);
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
