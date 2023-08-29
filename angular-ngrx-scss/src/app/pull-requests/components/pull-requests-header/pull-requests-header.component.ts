import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  ISSUE_STATE,
  RepoPullRequests,
  fetchPullRequests,
  selectHasActivePullRequestFilters,
  selectLabels,
} from '../../../state/repository';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { FilterOption } from 'src/app/shared/components/filter-dropdown/filter-dropdown.component';
import { SORTING_OPTIONS } from 'src/app/shared/constants';
import { Sort } from 'src/app/repository/services/repository.interfaces';

@Component({
  selector: 'app-pull-requests-header',
  templateUrl: './pull-requests-header.component.html',
  styleUrls: ['./pull-requests-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullRequestsHeaderComponent {
  @Input() owner!: string;
  @Input() repoName!: string;
  @Input() openPullRequests!: RepoPullRequests | null;
  @Input() closedPullRequests!: RepoPullRequests | null;
  @Input() viewState: ISSUE_STATE = 'open';
  @Output() viewStateChange = new EventEmitter<ISSUE_STATE>();

  hasFilters$ = this.store.select(selectHasActivePullRequestFilters);

  filterParams: { labels?: string; sort: Sort } = {
    sort: 'created',
  };

  sortOptions: FilterOption[] = SORTING_OPTIONS;

  labels$ = this.store
    .select(selectLabels)
    .pipe(
      map((labels) =>
        labels.map((label) => ({ label: label.name, value: label.name })),
      ),
    );

  constructor(private store: Store) {}

  changeViewState(state: ISSUE_STATE) {
    this.viewState = state;
    this.viewStateChange.emit(this.viewState);
  }

  setLabel(label: string) {
    this.filterParams.labels = label;
    this.refetchPulls();
  }

  setSort(sort: string) {
    this.filterParams.sort = sort as Sort;
    this.refetchPulls();
  }

  clearFilters() {
    this.filterParams = { sort: 'created' };
    this.refetchPulls();
  }

  private refetchPulls() {
    this.store.dispatch(
      fetchPullRequests({
        owner: this.owner,
        repoName: this.repoName,
        params: { state: 'open', ...this.filterParams },
      }),
    );
    this.store.dispatch(
      fetchPullRequests({
        owner: this.owner,
        repoName: this.repoName,
        params: { state: 'closed', ...this.filterParams },
      }),
    );
  }
}
