import { Injectable } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { ComponentStore, tapResponse } from '@ngrx/component-store';
import { Apollo } from 'apollo-angular';
import { Observable, switchMap } from 'rxjs';
import {
  RepoIssuesData,
  RepoIssuesVars,
  REPO_ISSUES_QUERY,
  ResolvedRepoDetails,
  Issues,
  Milestone,
  OPEN_CLOSED_STATE,
} from '../gql';
import { FilterState, ReposFilterStore } from '@filter-store';
import { parseQuery } from './parse-issues';

export interface IssuesState {
  openIssues: Issues;
  closedIssues: Issues;
  issuesLoaded: boolean;
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
  openIssues: INITIAL_ISSUES_STATE,
  closedIssues: INITIAL_ISSUES_STATE,
  issuesLoaded: false,
};

@Injectable()
export class IssuesStore extends ComponentStore<IssuesState> {
  // *********** Updaters *********** //

  readonly setMilestones = this.updater((state, values: Milestone[]) => ({
    ...state,
    milestones: values,
    milestonesLoaded: true,
  }));

  readonly setOpenIssues = this.updater((state, values: Issues) => ({
    ...state,
    openIssues: values,
  }));

  readonly setClosedIssues = this.updater((state, values: Issues) => ({
    ...state,
    closedIssues: values,
  }));

  readonly setIssuesLoaded = this.updater((state, value: boolean) => ({
    ...state,
    issuesLoaded: value,
  }));

  // *********** Selectors *********** //

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
    (activeIssues) => activeIssues.pageInfo,
  );

  readonly issuesLoaded$ = this.select(({ issuesLoaded }) => issuesLoaded);

  // *********** Effects *********** //

  readonly getIssues$ = this.effect((target$: Observable<FilterState>) =>
    target$.pipe(
      switchMap(
        ({
          label,
          milestone,
          sort,
          afterCursor,
          beforeCursor,
          milestonesLoaded,
          labelsLoaded,
        }) =>
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

                        if (!(milestonesLoaded && labelsLoaded)) {
                          this.reposFilterStore.setMilestones(milestones);
                          this.reposFilterStore.setLabels(labels);
                          this.reposFilterStore.setFiltersLoaded(true);
                        }
                        this.setOpenIssues(openIssues);
                        this.setClosedIssues(closedIssues);
                        this.setIssuesLoaded(true);
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

  constructor(
    private reposFilterStore: ReposFilterStore,
    private routeConfigService: RouteConfigService<string, 'userDetails'>,
    private apollo: Apollo,
  ) {
    super(INITIAL_STATE);
  }
}
