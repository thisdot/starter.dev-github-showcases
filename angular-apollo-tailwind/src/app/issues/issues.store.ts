import { Injectable } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap, withLatestFrom } from 'rxjs';
import {
  Label,
  RepoIssuesData,
  RepoIssuesVars,
  REPO_ISSUES_QUERY,
  ResolvedRepoDetails,
  Issues,
  Milestone,
  OPEN_CLOSED_STATE,
} from '../gql';
import { ReposFilterStore } from '@filter-store';
import { parseQuery } from './parse-issues';

export interface IssuesState {
  labels: Label[];
  milestones: Milestone[];
  openIssues: Issues;
  closedIssues: Issues;
}

const INITIAL_ISSUES_STATE: Issues = {
  issues: [],
  totalCount: 0,
  pageInfo: {
    hasNextPage: false,
    hasPreviousPage: false,
  },
};

const INITIAL_STATE: IssuesState = {
  labels: [],
  milestones: [],
  openIssues: INITIAL_ISSUES_STATE,
  closedIssues: INITIAL_ISSUES_STATE,
};

@Injectable()
export class IssuesStore extends ComponentStore<IssuesState> {
  constructor(
    private reposFilterStore: ReposFilterStore,
    private routeConfigService: RouteConfigService<string, 'userDetails'>,
    private apollo: Apollo,
  ) {
    super(INITIAL_STATE);
  }
  // *********** Updaters *********** //

  // Filter store updaters
  readonly setMilestone = this.reposFilterStore.setMilestone;
  readonly setLabel = this.reposFilterStore.setLabel;
  readonly changeState = this.reposFilterStore.changeState;
  readonly setSort = this.reposFilterStore.setSort;
  readonly changePage = this.reposFilterStore.changePage;
  readonly clearFilters = this.reposFilterStore.clearFilters;

  readonly setMilestones = this.updater((state, values: Milestone[]) => ({
    ...state,
    milestones: values,
  }));

  readonly setOpenIssues = this.updater((state, values: Issues) => ({
    ...state,
    openIssues: values,
  }));

  readonly setClosedIssues = this.updater((state, values: Issues) => ({
    ...state,
    closedIssues: values,
  }));

  readonly setLabels = this.updater((state, values: Label[]) => ({
    ...state,
    labels: values,
  }));

  // *********** Selectors *********** //

  // Filter store selectors
  readonly label$ = this.reposFilterStore.label$;
  readonly milestone$ = this.reposFilterStore.milestone$;
  readonly issueState$ = this.reposFilterStore.issueState$;
  readonly type$ = this.reposFilterStore.type$;
  readonly sort$ = this.reposFilterStore.sort$;
  readonly hasActiveFilters$ = this.reposFilterStore.hasActiveFilters$;

  readonly labels$ = this.select(({ labels }) => labels);

  readonly milestones$ = this.select(({ milestones }) => milestones);

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
    this.reposFilterStore.issueState$,
    this.openIssues$,
    this.closedIssues$,
    (state, openIssues, closedIssues) =>
      state === OPEN_CLOSED_STATE.OPEN ? openIssues : closedIssues,
  );

  readonly pageInfo$ = this.select(
    this.activeIssues$,
    (activeIssues) => activeIssues?.pageInfo,
  );

  // *********** Effects *********** //

  readonly getIssues$ = this.effect((target$: Observable<void>) =>
    target$.pipe(
      withLatestFrom(this.reposFilterStore.state$),
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
                      const { openIssues, closedIssues, milestones, labels } =
                        parseQuery(res.data);

                      this.setMilestones(milestones);
                      this.setOpenIssues(openIssues);
                      this.setClosedIssues(closedIssues);
                      this.setLabels(labels);
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
