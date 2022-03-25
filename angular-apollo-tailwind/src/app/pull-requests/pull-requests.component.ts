import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PullRequestState, RepoPullRequests } from '../gql';
import { PaginatorOptions, PullRequestsStore } from './pull-requests.store';

@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [PullRequestsStore],
})
export class PullRequestsComponent implements OnInit {
  readonly repoPullRequests$: Observable<RepoPullRequests | null> =
    this.pullRequestsStore.activePullRequests$;
  readonly openPullRequestsCount$ =
    this.pullRequestsStore.openPullRequestsCount$;
  readonly closedPullRequestsCount$ =
    this.pullRequestsStore.closedPullRequestsCount$;
  readonly label$ = this.pullRequestsStore.label$;
  readonly labels$ = this.pullRequestsStore.labels$;
  readonly milestone$ = this.pullRequestsStore.milestone$;
  readonly milestones$ = this.pullRequestsStore.milestones$;
  readonly pullRequestState$ = this.pullRequestsStore.pullRequestState$;
  readonly type$ = this.pullRequestsStore.type$;
  readonly sort$ = this.pullRequestsStore.sort$;
  readonly hasActiveFilters$ = this.pullRequestsStore.hasActiveFilters$;
  readonly pageInfo$ = this.pullRequestsStore.pageInfo$;

  constructor(private pullRequestsStore: PullRequestsStore) {}

  ngOnInit(): void {
    this.pullRequestsStore.getPullRequests$();
  }

  setMilestone(milestone: string) {
    this.pullRequestsStore.setMilestone(milestone);
  }

  setLabel(label: string) {
    this.pullRequestsStore.setLabel(label);
    this.pullRequestsStore.getPullRequests$();
  }

  setSort(sort: string) {
    this.pullRequestsStore.setSort(sort);
    this.pullRequestsStore.getPullRequests$();
  }

  openPullRequest() {
    this.pullRequestsStore.changeState(PullRequestState.Open);
    this.pullRequestsStore.getPullRequests$();
  }

  closePullRequest() {
    this.pullRequestsStore.changeState(PullRequestState.Closed);
    this.pullRequestsStore.getPullRequests$();
  }

  changePage(page: PaginatorOptions) {
    this.pullRequestsStore.changePage(page);
    this.pullRequestsStore.getPullRequests$();
  }

  clearFilters() {
    this.pullRequestsStore.resetState();
    this.pullRequestsStore.getPullRequests$();
  }
}
