import { Injectable } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap, withLatestFrom } from 'rxjs';
import { ORDER_BY_DIRECTION, ResolvedRepoDetails } from '../gql';
import {
  Issue,
  Issues,
  IssuesFormatted,
  ISSUE_ORDER_FIELD,
  ISSUE_TYPE,
  Label,
  Milestones,
  OPEN_CLOSED_STATE as ISSUE_STATE,
  RepoIssuesData,
  RepoIssuesVars,
  SortOption,
} from '../gql/models/repo-issues';
import { REPO_ISSUES_QUERY } from '../gql/queries/repo-issues';

export interface FilterState {
  label: string;
  labels: Label[];
  milestone: string;
  state: ISSUE_STATE;
  type: ISSUE_TYPE;
  sort: SortOption;
  afterCursor?: string;
  beforeCursor?: string;
  milestones: Milestones | null;
  openIssues: IssuesFormatted | null;
  closedIssues: IssuesFormatted | null;
}

export interface PaginatorOptions {
  afterCursor: string;
  beforeCursor: string;
}

const INITIAL_STATE: FilterState = {
  label: '',
  labels: [],
  milestone: '',
  state: ISSUE_STATE.OPEN,
  type: ISSUE_TYPE.ISSUE,
  sort: {
    field: ISSUE_ORDER_FIELD.CREATED_AT,
    direction: ORDER_BY_DIRECTION.DESC,
  },
  milestones: null,
  openIssues: null,
  closedIssues: null,
};

const ISSUE_ORDER_DICT: { [key: string]: ISSUE_ORDER_FIELD } = {
  COMMENTS: ISSUE_ORDER_FIELD.COMMENTS,
  CREATED_AT: ISSUE_ORDER_FIELD.CREATED_AT,
  UPDATED_AT: ISSUE_ORDER_FIELD.UPDATED_AT,
};

const DIRECTION_DICT: { [key: string]: ORDER_BY_DIRECTION } = {
  ASC: ORDER_BY_DIRECTION.ASC,
  DESC: ORDER_BY_DIRECTION.DESC,
};

interface GenericLabel {
  [key: string]: Label;
}

const parseIssues = (values: Issues) =>
  values.nodes.map((issue) => ({
    ...issue,
    createdAt: new Date(issue.createdAt),
    closedAt: issue.closedAt ? new Date(issue.closedAt) : undefined,
  }));

@Injectable()
export class IssuesStore extends ComponentStore<FilterState> {
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

  readonly changeState = this.updater((state, value: ISSUE_STATE) => ({
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

  readonly resetState = this.updater((state) => ({
    ...INITIAL_STATE,
    type: state.type,
  }));

  readonly setOpenIssues = this.updater((state, values: Issues) => ({
    ...state,
    openIssues: {
      ...values,
      nodes: parseIssues(values),
    },
  }));

  readonly setClosedIssues = this.updater((state, values: Issues) => ({
    ...state,
    closedIssues: {
      ...values,
      nodes: parseIssues(values),
    },
  }));

  readonly setActiveIssuesLabels = this.updater((state, values: Issue[]) => {
    const labelsMap: GenericLabel = values.reduce(
      (acc: GenericLabel, issue) => {
        const map: GenericLabel = {};
        issue.labels.nodes.forEach((label) => {
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
  });

  // *********** Selectors *********** //

  readonly label$ = this.select(({ label }) => label);

  readonly labels$ = this.select(
    ({ labels: activeIssuesLabels }) => activeIssuesLabels,
  );

  readonly milestone$ = this.select(({ milestone }) => milestone);

  readonly milestones$ = this.select(({ milestones }) => milestones?.nodes);

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
      sort.direction !== ORDER_BY_DIRECTION.DESC ||
      sort.field !== ISSUE_ORDER_FIELD.CREATED_AT,
  );

  readonly openIssues$ = this.select(({ openIssues }) => openIssues);

  readonly openIssuesCount$ = this.select(
    this.openIssues$,
    (issues) => issues?.totalCount,
  );

  readonly closedIssues$ = this.select(({ closedIssues }) => closedIssues);

  readonly closedIssuesCount$ = this.select(
    this.closedIssues$,
    (issues) => issues?.totalCount,
  );

  readonly activeIssues$ = this.select(
    this.issueState$,
    this.openIssues$,
    this.closedIssues$,
    (state, openIssues, closedIssues) =>
      state === ISSUE_STATE.OPEN
        ? (openIssues as IssuesFormatted)
        : (closedIssues as IssuesFormatted),
  );

  readonly pageInfo$ = this.select(
    this.activeIssues$,
    (activeIssues) => activeIssues?.pageInfo,
  );

  // *********** Effects *********** //

  readonly getIssues$ = this.effect((target$: Observable<void>) =>
    target$.pipe(
      withLatestFrom(this.state$),
      switchMap(([, { label, milestone, sort, afterCursor, beforeCursor }]) =>
        this.routeConfigService
          .getLeafConfig<ResolvedRepoDetails>('userDetails')
          .pipe(
            switchMap(({ owner, name }) =>
              this.apollo
                .watchQuery<RepoIssuesData, RepoIssuesVars>({
                  query: REPO_ISSUES_QUERY,
                  variables: {
                    owner,
                    name,
                    orderBy: sort ?? undefined,
                    filterBy:
                      label || milestone
                        ? {
                            labels: label ? [label] : undefined,
                            milestone: milestone || undefined,
                          }
                        : undefined,
                    after: afterCursor ?? undefined,
                    before: beforeCursor ?? undefined,
                  },
                })
                .valueChanges.pipe(
                  tapResponse(
                    (res) => {
                      const { milestones, openIssues, closedIssues } =
                        res.data.repository;

                      this.setMilestones(milestones);
                      this.setOpenIssues(openIssues);
                      this.setClosedIssues(closedIssues);
                      this.setActiveIssuesLabels([
                        ...openIssues.nodes,
                        ...closedIssues.nodes,
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
