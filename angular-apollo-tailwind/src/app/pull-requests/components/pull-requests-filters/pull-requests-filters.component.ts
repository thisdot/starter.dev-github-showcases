import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FilterOption } from '../../../components/filter-dropdown/filter-dropdown.component';
import {
  IssueOrder,
  Label,
  Milestone,
  OrderDirection,
  PullRequestOrderField,
  PullRequestState,
} from '../../../gql';

const sortOptions: FilterOption[] = [
  {
    label: 'Newest',
    value: `${PullRequestOrderField.CreatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Oldest',
    value: `${PullRequestOrderField.CreatedAt}^${OrderDirection.Asc}`,
  },
  // {
  //   label: 'Most commented',
  //   value: `${IssueOrderField.Comments}^${OrderDirection.Desc}`,
  // },
  // {
  //   label: 'Least commented',
  //   value: `${IssueOrderField.Comments}^${OrderDirection.Asc}`,
  // },
  {
    label: 'Recently updated',
    value: `${PullRequestOrderField.UpdatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least recently updated',
    value: `${PullRequestOrderField.UpdatedAt}^${OrderDirection.Asc}`,
  },
];

@Component({
  selector: 'app-pull-requests-filters',
  templateUrl: './pull-requests-filters.component.html',
  styleUrls: ['./pull-requests-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullRequestFiltersComponent {
  @Input() openCount = 0;
  @Input() closedCount = 0;
  @Input() currentMilestone: string | null = null;
  @Input() set milestones(val: Milestone[]) {
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
  @Input() set labels(val: Label[]) {
    const a = val as Label[];
    this.labelOptions = a.map((label) => ({
      label: label.name,
      value: label.name,
    }));
  }
  @Input() sort: IssueOrder | null = null;
  @Input() pullRequestState: PullRequestState | null = PullRequestState.Open;

  @Output() OpenPullRequest = new EventEmitter<void>();
  @Output() closePullRequest = new EventEmitter<void>();
  @Output() setLabel = new EventEmitter<string>();
  @Output() setMilestone = new EventEmitter<string>();
  @Output() setSort = new EventEmitter<string>();

  labelOptions: FilterOption[] = [];
  milestoneOptions: FilterOption[] = [];
  sortOptions = sortOptions;

  getOpenStyle() {
    return this.pullRequestState === PullRequestState.Open
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  getClosedStyle() {
    return this.pullRequestState === PullRequestState.Closed
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  handleOpenPullRequestClick() {
    this.OpenPullRequest.emit();
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
