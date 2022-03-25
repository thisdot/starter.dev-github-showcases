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
  IssueOrderField,
  IssueState,
  Label,
  Milestone,
  OrderDirection,
} from '../../../gql';

const sortOptions: FilterOption[] = [
  {
    label: 'Newest',
    value: `${IssueOrderField.CreatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Oldest',
    value: `${IssueOrderField.CreatedAt}^${OrderDirection.Asc}`,
  },
  {
    label: 'Most commented',
    value: `${IssueOrderField.Comments}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least commented',
    value: `${IssueOrderField.Comments}^${OrderDirection.Asc}`,
  },
  {
    label: 'Recently updated',
    value: `${IssueOrderField.UpdatedAt}^${OrderDirection.Desc}`,
  },
  {
    label: 'Least recently updated',
    value: `${IssueOrderField.UpdatedAt}^${OrderDirection.Asc}`,
  },
];

@Component({
  selector: 'app-issues-filters',
  templateUrl: './issues-filters.component.html',
  styleUrls: ['./issues-filters.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IssuesFiltersComponent {
  @Input() openCount: number | null | undefined = 0;
  @Input() closedCount: number | null | undefined = 0;
  @Input() currentMilestone: string | null = null;
  @Input() set milestones(val: Milestone[] | null | undefined) {
    const a = val as Milestone[];
    const b = [{ title: 'Issue with no milestone', id: '' }, ...a];
    this.milestoneOptions = b.map((milestone) => ({
      label: milestone.title,
      value: milestone.id,
    }));
  }
  @Input() currentLabel: string | null = '';
  @Input() set labels(val: Label[] | null) {
    const a = val as Label[];
    this.labelOptions = a.map((label) => ({
      label: label.name,
      value: label.name,
    }));
  }
  @Input() sort: IssueOrder | null = null;
  @Input() issueState: IssueState | null = IssueState.Open;

  @Output() openIssue = new EventEmitter<void>();
  @Output() closeIssue = new EventEmitter<void>();
  @Output() setLabel = new EventEmitter<string>();
  @Output() setMilestone = new EventEmitter<string>();
  @Output() setSort = new EventEmitter<string>();

  labelOptions: FilterOption[] = [];
  milestoneOptions: FilterOption[] = [];
  sortOptions = sortOptions;

  getOpenStyle() {
    return this.issueState === IssueState.Open
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  getClosedStyle() {
    return this.issueState === IssueState.Closed
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  handleOpenIssueClick() {
    this.openIssue.emit();
  }

  handleCloseIssueClick() {
    this.closeIssue.emit();
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
