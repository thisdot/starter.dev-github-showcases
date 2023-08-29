import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Sort } from 'src/app/repository/services/repository.interfaces';
import { FilterOption } from 'src/app/shared/components/filter-dropdown/filter-dropdown.component';
import { SORTING_OPTIONS } from 'src/app/shared/constants';
import {
  ISSUE_STATE,
  RepoIssues,
  fetchIssues,
  selectLabels,
  selectMilestones,
} from 'src/app/state/repository';

@Component({
  selector: 'app-issues-header',
  templateUrl: './issues-header.component.html',
  styleUrls: ['./issues-header.component.scss'],
})
export class IssuesHeaderComponent {
  @Input() owner!: string;

  @Input() repoName!: string;

  filterParams: { labels?: string; milestone?: string; sort: Sort } = {
    sort: 'created',
  };

  sortOptions: FilterOption[] = SORTING_OPTIONS;

  milestones$: Observable<FilterOption[]> = this.store
    .select(selectMilestones)
    .pipe(
      map((milestones) =>
        milestones.map((milestone) => ({
          label: milestone.title,
          value: milestone.title,
        })),
      ),
    );

  labels$: Observable<FilterOption[]> = this.store
    .select(selectLabels)
    .pipe(
      map((labels) =>
        labels.map((label) => ({ label: label.name, value: label.name })),
      ),
    );

  @Input() viewState: ISSUE_STATE = 'open';

  @Input()
  openIssues: RepoIssues | null = null;

  @Input()
  closedIssues: RepoIssues | null = null;

  @Output() viewStateChange = new EventEmitter<ISSUE_STATE>();

  constructor(private store: Store) {}

  selectOpen() {
    this.viewStateChange.emit('open');
  }

  selectClosed() {
    this.viewStateChange.emit('closed');
  }

  setLabel(label: string) {
    this.filterParams.labels = label;
    this.refetchIssues();
  }

  setMilestone(milestone: string) {
    this.filterParams.milestone = milestone;
    this.refetchIssues();
  }

  setSort(sort: string) {
    this.filterParams.sort = sort as Sort;
    this.refetchIssues();
  }

  private refetchIssues() {
    this.store.dispatch(
      fetchIssues({
        owner: this.owner,
        repoName: this.repoName,
        params: { state: 'open', ...this.filterParams },
      }),
    );
    this.store.dispatch(
      fetchIssues({
        owner: this.owner,
        repoName: this.repoName,
        params: { state: 'closed', ...this.filterParams },
      }),
    );
  }
}
