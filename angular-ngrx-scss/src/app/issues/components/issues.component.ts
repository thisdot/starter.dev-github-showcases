import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  ISSUE_STATE,
  fetchIssues,
  selectClosedIssuePaginationParams,
  selectClosedIssues,
  selectOpenIssuePaginationParams,
  selectOpenIssues,
} from 'src/app/state/repository';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss'],
})
export class IssuesComponent {
  owner!: string;
  repoName!: string;
  openIssues$ = this.store.select(selectOpenIssues);
  closedIssues$ = this.store.select(selectClosedIssues);
  viewState: ISSUE_STATE = 'open';

  openIssuesPaginationParams$ = this.store.select(
    selectOpenIssuePaginationParams,
  );
  closedIssuesPaginationParams$ = this.store.select(
    selectClosedIssuePaginationParams,
  );

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit(): void {
    this.owner = this.route.snapshot.paramMap.get('owner') as string;
    this.repoName = this.route.snapshot.paramMap.get('repo') as string;

    this.store.dispatch(
      fetchIssues({
        owner: this.owner,
        repoName: this.repoName,
        params: { state: 'open' },
      }),
    );

    this.store.dispatch(
      fetchIssues({
        owner: this.owner,
        repoName: this.repoName,
        params: { state: 'closed' },
      }),
    );
  }

  pageChange(page: number) {
    this.store.dispatch(
      fetchIssues({
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
