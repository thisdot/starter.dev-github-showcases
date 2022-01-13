import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FilterOption } from 'src/app/components/filter-dropdown/filter-dropdown.component';
import {
  Label,
  Milestone,
  OPEN_CLOSED_STATE,
  ORDER_BY_DIRECTION,
  PULL_REQUESTS_ORDER_FIELD,
  SortPullOption,
} from 'src/app/gql';

const sortOptions: FilterOption[] = [
  {
    label: 'Newest',
    value: `${PULL_REQUESTS_ORDER_FIELD.CREATED_AT}^${ORDER_BY_DIRECTION.Desc}`,
  },
  {
    label: 'Oldest',
    value: `${PULL_REQUESTS_ORDER_FIELD.CREATED_AT}^${ORDER_BY_DIRECTION.Asc}`,
  },
  {
    label: 'Most commented',
    value: `${PULL_REQUESTS_ORDER_FIELD.COMMENTS}^${ORDER_BY_DIRECTION.Desc}`,
  },
  {
    label: 'Least commented',
    value: `${PULL_REQUESTS_ORDER_FIELD.COMMENTS}^${ORDER_BY_DIRECTION.Asc}`,
  },
  {
    label: 'Recently updated',
    value: `${PULL_REQUESTS_ORDER_FIELD.UPDATED_AT}^${ORDER_BY_DIRECTION.Desc}`,
  },
  {
    label: 'Least recently updated',
    value: `${PULL_REQUESTS_ORDER_FIELD.UPDATED_AT}^${ORDER_BY_DIRECTION.Asc}`,
  },
];

@Component({
  selector: 'app-pull-requests-filters',
  templateUrl: './pull-requests-filters.component.html',
  styleUrls: ['./pull-requests-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullRequestFiltersComponent {
  @Input() openCount: number | null | undefined = 0;
  @Input() closedCount: number | null | undefined = 0;
  @Input() currentMilestone: string | null = null;
  @Input() set milestones(val: Milestone[] | null | undefined) {
    if (val) {
      const a = val as Milestone[];
      const b = [{ title: 'PullRequest with no milestone', id: '' }, ...a];
      this.milestoneOptions = b.map((milestone) => ({
        label: milestone.title,
        value: milestone.id,
      }));
    }
  }
  @Input() currentLabel: string | null = '';
  @Input() set labels(val: Label[] | null) {
    const a = val as Label[];
    this.labelOptions = a.map((label) => ({
      label: label.name,
      value: label.name,
    }));
  }
  @Input() sort: SortPullOption | null = null;
  @Input() pullRequestState: OPEN_CLOSED_STATE | null = OPEN_CLOSED_STATE.OPEN;

  @Output() openPullRequest = new EventEmitter<void>();
  @Output() closePullRequest = new EventEmitter<void>();
  @Output() setLabel = new EventEmitter<string>();
  @Output() setMilestone = new EventEmitter<string>();
  @Output() setSort = new EventEmitter<string>();

  labelOptions: FilterOption[] = [];
  milestoneOptions: FilterOption[] = [];
  sortOptions = sortOptions;

  getOpenStyle() {
    return this.pullRequestState === OPEN_CLOSED_STATE.OPEN
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  getClosedStyle() {
    return this.pullRequestState === OPEN_CLOSED_STATE.CLOSED
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  handleOpenPullRequestClick() {
    this.openPullRequest.emit();
  }

  handleClosePullRequestClick() {
    this.closePullRequest.emit();
  }

  handleLabelClick(label: string) {
    this.setLabel.emit(label);
  }

  handleMilestoneClick(milestone: string) {
    this.setMilestone.emit(milestone);
  }

  handleSortClick(sort: string) {
    this.setSort.emit(sort);
  }
}
