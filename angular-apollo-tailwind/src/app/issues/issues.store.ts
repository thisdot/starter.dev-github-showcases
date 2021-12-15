import { Injectable } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap, withLatestFrom } from 'rxjs';
import { ORDER_BY_DIRECTION, ResolvedRepoDetails } from '../gql';
import {
  Issue,
  Issues,
  ISSUE_ORDER_FIELD,
  ISSUE_TYPE,
  Label,
  Milestone,
  Milestones,
  OPEN_CLOSED_STATE as ISSUE_STATE,
  RepoIssueDetails,
  RepoIssuesData,
  RepoIssuesVars,
} from '../gql/models/repo-issues';
import { REPO_ISSUES_QUERY } from '../gql/queries/repo-issues';

export interface FilterState {
  label: string;
  labels: Label[];
  milestone: string;
  state: ISSUE_STATE;
  type: ISSUE_TYPE;
  sort: {
    field: ISSUE_ORDER_FIELD;
    direction: ORDER_BY_DIRECTION;
  };
  afterCursor?: string;
  beforeCursor?: string;
  milestones: Milestones | null;
  openIssues: Issues | null;
  closedIssues: Issues | null;
  activeIssues: Issues | null;
}

export interface SortOptions {
  field: ISSUE_ORDER_FIELD;
  direction: ORDER_BY_DIRECTION;
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
  activeIssues: null,
};

interface GenericLabel {
  [key: string]: Label;
}

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

  readonly setSort = this.updater(
    (state, { field, direction }: SortOptions) => ({
      ...state,
      sort: {
        field,
        direction,
      },
      afterCursor: undefined,
      beforeCursor: undefined,
    }),
  );

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
    openIssues: values,
  }));

  readonly setClosedIssues = this.updater((state, values: Issues) => ({
    ...state,
    closedIssues: values,
  }));

  readonly setActiveIssues = this.updater((state, values: Issues) => ({
    ...state,
    activeIssues: values,
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

  readonly milestones$ = this.select(({ milestones }) => milestones);

  readonly issueState$ = this.select(({ state }) => state);

  readonly type$ = this.select(({ type }) => type);

  readonly sort$ = this.select(({ sort }) => sort);

  readonly page$ = this.select(({ afterCursor, beforeCursor }) => ({
    afterCursor,
    beforeCursor,
  }));

  readonly hasActiveFilters = this.select(
    this.label$,
    this.milestone$,
    this.sort$,
    (label, milestone, sort) =>
      typeof label === 'string' ||
      typeof milestone === 'string' ||
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

  readonly aciveIssues$ = this.select(({ activeIssues }) => activeIssues);

  // *********** Effects *********** //

  readonly getIssues$ = this.effect((target$: Observable<void>) =>
    target$.pipe(
      withLatestFrom(this.state$),
      switchMap(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ([_, { label, milestone, state, sort, afterCursor, beforeCursor }]) =>
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
                              labels: [label],
                              milestone,
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
                        const activeIssues =
                          state === ISSUE_STATE.OPEN
                            ? openIssues
                            : closedIssues;

                        this.setMilestones(milestones);
                        this.setOpenIssues(openIssues);
                        this.setClosedIssues(closedIssues);
                        this.setActiveIssues(activeIssues);
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

  // private parseIssues(issueConnection?: any) {
  //   if (!issueConnection) {
  //     return {
  //       issues: [],
  //       totalCount: 0,
  //       pageInfo: { hasNextPage: false, hasPreviousPage: false },
  //     };
  //   }

  //   const pageInfo = issueConnection.pageInfo;
  //   const nodes = issueConnection.nodes || [];
  //   const totalCount = issueConnection.totalCount;

  //   const issues = nodes.reduce((issues: Issue[], issue: any) => {
  //     if (!issue) {
  //       return issues;
  //     }

  //     const labelNodes = issue.labels?.nodes || [];
  //     const labels = labelNodes.reduce(
  //       (labels: Label[], label: any) =>
  //         label
  //           ? [
  //               ...labels,
  //               {
  //                 color: label.color,
  //                 name: label.name,
  //               },
  //             ]
  //           : labels,
  //       [],
  //     );

  //     return [
  //       ...issues,
  //       {
  //         id: issue.id,
  //         login: issue.author?.login,
  //         commentCount: issue.comments.totalCount,
  //         labelCount: issue.labels.totalCount,
  //         labels,
  //         closed: issue.closed,
  //         title: issue.title,
  //         number: issue.number,
  //         createdAt: issue.createdAt,
  //         closedAt: issue.closedAt,
  //       },
  //     ];
  //   }, []);

  //   return { issues, totalCount, pageInfo };
  // }

  // private parseMilestones(milestones?: any) {
  //   const nodes = milestones.nodes || [];
  //   return nodes.reduce((milestones: Milestone[], milestone: any) => {
  //     if (!milestone) {
  //       return milestones;
  //     }

  //     return [
  //       ...milestones,
  //       {
  //         id: milestone.id,
  //         closed: milestone.closed,
  //         title: milestone.title,
  //         number: milestone.number,
  //         description: milestone.description,
  //       },
  //     ];
  //   }, []);
  // }

  // private parseQuery(data: RepoIssuesData) {
  //   const openIssues = this.parseIssues(data.repository?.openIssues);
  //   const closedIssues = this.parseIssues(data.repository?.closedIssues);
  //   const milestones = this.parseMilestones(data.repository?.milestones);

  //   const labelMap = [...closedIssues.issues, ...openIssues.issues].reduce(
  //     (acc: { [key: string]: Label }, issue: Issue) => {
  //       const map: { [key: string]: Label } = {};
  //       issue.labels.forEach((label) => {
  //         map[label.name] = label;
  //       });
  //       return {
  //         ...acc,
  //         ...map,
  //       };
  //     },
  //     {},
  //   );

  //   return {
  //     openIssues,
  //     closedIssues,
  //     milestones,
  //     labels: Object.values(labelMap) as Label[],
  //   };
  // }
}
