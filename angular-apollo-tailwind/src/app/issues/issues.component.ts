import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {
  IssuesFormatted,
  OPEN_CLOSED_STATE,
  SortOption,
} from '../gql/models/repo-issues';
import { IssuesStore, PaginatorOptions } from './issues.store';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [IssuesStore],
})
export class IssuesComponent implements OnInit {
  readonly repoIssues$: Observable<IssuesFormatted | null> =
    this.issuesStore.activeIssues$;
  readonly openIssuesCount$ = this.issuesStore.openIssuesCount$;
  readonly closedIssuesCount$ = this.issuesStore.closedIssuesCount$;
  readonly label$ = this.issuesStore.label$;
  readonly labels$ = this.issuesStore.labels$;
  readonly milestone$ = this.issuesStore.milestone$;
  readonly milestones$ = this.issuesStore.milestones$;
  readonly issueState$ = this.issuesStore.issueState$;
  readonly type$ = this.issuesStore.type$;
  readonly sort$ = this.issuesStore.sort$;
  readonly hasActiveFilters$ = this.issuesStore.hasActiveFilters$;
  readonly pageInfo$ = this.issuesStore.pageInfo$;

  constructor(private issuesStore: IssuesStore) {}

  ngOnInit(): void {
    this.issuesStore.getIssues$();
  }

  setMilestone(milestone: string) {
    this.issuesStore.setMilestone(milestone);
  }

  setLabel(label: string) {
    this.issuesStore.setLabel(label);
  }

  setSort(sort: SortOption) {
    this.issuesStore.setSort(sort);
  }

  openIssue() {
    this.issuesStore.changeState(OPEN_CLOSED_STATE.OPEN);
  }

  closeIssue() {
    this.issuesStore.changeState(OPEN_CLOSED_STATE.CLOSED);
  }

  changePage(page: PaginatorOptions) {
    this.issuesStore.changePage(page);
  }

  clearFilters() {
    this.issuesStore.resetState();
  }
}
