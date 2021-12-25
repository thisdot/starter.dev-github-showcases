import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PaginatorOptions, ReposFilterStore } from '@filter-store';
import { Observable } from 'rxjs';
import { Issues, OPEN_CLOSED_STATE } from '../gql';
import { IssuesStore } from './issues.store';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ReposFilterStore, IssuesStore],
})
export class IssuesComponent implements OnInit {
  readonly repoIssues$: Observable<Issues> = this.issuesStore.activeIssues$;
  readonly openIssuesCount$ = this.issuesStore.openIssuesCount$;
  readonly closedIssuesCount$ = this.issuesStore.closedIssuesCount$;
  readonly labels$ = this.issuesStore.labels$;
  readonly milestones$ = this.issuesStore.milestones$;
  readonly pageInfo$ = this.issuesStore.pageInfo$;
  readonly issuesLoaded$ = this.issuesStore.issuesLoaded$;

  // Filter store selectors
  readonly label$ = this.reposFilterStore.label$;
  readonly milestone$ = this.reposFilterStore.milestone$;
  readonly issueState$ = this.reposFilterStore.issueState$;
  readonly sort$ = this.reposFilterStore.sort$;
  readonly hasActiveFilters$ = this.reposFilterStore.hasActiveFilters$;
  readonly filterState$ = this.reposFilterStore.state$;

  activeIssues: Issues | null = null;

  constructor(
    private reposFilterStore: ReposFilterStore,
    private issuesStore: IssuesStore,
  ) {}

  ngOnInit(): void {
    this.issuesStore.getIssues$(this.filterState$);
  }

  setMilestone(milestone: string) {
    this.reposFilterStore.setMilestone(milestone);
    this.issuesStore.getIssues$(this.filterState$);
  }

  setLabel(label: string) {
    this.reposFilterStore.setLabel(label);
    this.issuesStore.getIssues$(this.filterState$);
  }

  setSort(sort: string) {
    this.reposFilterStore.setSort(sort);
    this.issuesStore.getIssues$(this.filterState$);
  }

  openIssue() {
    this.reposFilterStore.changeState(OPEN_CLOSED_STATE.OPEN);
    this.issuesStore.getIssues$(this.filterState$);
  }

  closeIssue() {
    this.reposFilterStore.changeState(OPEN_CLOSED_STATE.CLOSED);
    this.issuesStore.getIssues$(this.filterState$);
  }

  changePage(page: PaginatorOptions) {
    this.reposFilterStore.changePage(page);
    this.issuesStore.getIssues$(this.filterState$);
  }

  clearFilters() {
    this.reposFilterStore.clearFilters();
    this.issuesStore.getIssues$(this.filterState$);
  }
}
