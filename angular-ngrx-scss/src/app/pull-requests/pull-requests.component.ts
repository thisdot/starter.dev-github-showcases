import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  fetchPullRequests,
  ISSUE_STATE,
  selectClosedPullRequests,
  selectClosedPullRequestsPaginationParams,
  selectOpenPullRequests,
  selectOpenPullRequestsPaginationParams,
} from '../state/repository';
@Component({
  selector: 'app-pull-requests',
  templateUrl: './pull-requests.component.html',
  styleUrls: ['./pull-requests.component.scss'],
})
export class PullRequestsComponent implements OnInit {
  owner!: string;
  repoName!: string;
  openPullRequests$ = this.store.select(selectOpenPullRequests);
  closedPullRequests$ = this.store.select(selectClosedPullRequests);
  viewState: ISSUE_STATE = 'open';

  openPullRequestsPaginationParams$ = this.store.select(
    selectOpenPullRequestsPaginationParams,
  );

  closedPullRequestsPaginationParams$ = this.store.select(
    selectClosedPullRequestsPaginationParams,
  );

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.owner = this.route.snapshot.paramMap.get('owner') as string;
    this.repoName = this.route.snapshot.paramMap.get('repo') as string;

    this.store.dispatch(
      fetchPullRequests({
        owner: this.owner,
        repoName: this.repoName,
        params: {
          state: 'open',
        },
      }),
    );

    this.store.dispatch(
      fetchPullRequests({
        owner: this.owner,
        repoName: this.repoName,
        params: {
          state: 'closed',
        },
      }),
    );
  }

  pageChange(page: number) {
    this.store.dispatch(
      fetchPullRequests({
        owner: this.owner,
        repoName: this.repoName,
        params: { state: this.viewState, page },
      }),
    );
  }

  viewStateChange(viewState: ISSUE_STATE) {
    this.viewState = viewState;
  }
}
