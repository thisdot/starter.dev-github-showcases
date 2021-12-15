import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterOption } from 'src/app/components/filter-dropdown/filter-dropdown.component';
import { ORDER_BY_DIRECTION } from 'src/app/gql';
import {
  ISSUE_ORDER_FIELD,
  Label,
  Milestone,
  Milestones,
  OPEN_CLOSED_STATE,
  SortOption,
} from 'src/app/gql/models/repo-issues';

const sortOptions: FilterOption[] = [
  {
    label: 'Newest',
    value: `${ISSUE_ORDER_FIELD.CREATED_AT}^${ORDER_BY_DIRECTION.DESC}`,
  },
  {
    label: 'Oldest',
    value: `${ISSUE_ORDER_FIELD.CREATED_AT}^${ORDER_BY_DIRECTION.ASC}`,
  },
  {
    label: 'Most commented',
    value: `${ISSUE_ORDER_FIELD.COMMENTS}^${ORDER_BY_DIRECTION.DESC}`,
  },
  {
    label: 'Least commented',
    value: `${ISSUE_ORDER_FIELD.COMMENTS}^${ORDER_BY_DIRECTION.ASC}`,
  },
  {
    label: 'Recently updated',
    value: `${ISSUE_ORDER_FIELD.UPDATED_AT}^${ORDER_BY_DIRECTION.DESC}`,
  },
  {
    label: 'Least recently updated',
    value: `${ISSUE_ORDER_FIELD.UPDATED_AT}^${ORDER_BY_DIRECTION.ASC}`,
  },
];

@Component({
  selector: 'app-issues-filters',
  templateUrl: './issues-filters.component.html',
  styleUrls: ['./issues-filters.component.css'],
})
export class IssuesFiltersComponent {
  @Input() openCount: number | null | undefined = 0;
  @Input() closedCount: number | null | undefined = 0;
  @Input() currentMilestone: string | null = null;
  @Input() set milestones(val: Milestone[] | null | undefined) {
    const a = val as Milestone[];
    const b = [{ title: 'Issue with no milestone', id: null }, ...a];
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
  @Input() sort: SortOption | null = null;
  @Input() issueState: OPEN_CLOSED_STATE | null = OPEN_CLOSED_STATE.OPEN;

  @Output() openIssue: EventEmitter<void> = new EventEmitter();
  @Output() closeIssue: EventEmitter<void> = new EventEmitter();
  @Output() setLabel: EventEmitter<string> = new EventEmitter();
  @Output() setMilestone: EventEmitter<string> = new EventEmitter();
  @Output() setSort: EventEmitter<any> = new EventEmitter();

  labelOptions: FilterOption[] = [];
  milestoneOptions: FilterOption[] = [];
  sortOptions = sortOptions;

  setOpenStyle() {
    return this.issueState === OPEN_CLOSED_STATE.OPEN
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  setClosedStyle() {
    return this.issueState === OPEN_CLOSED_STATE.CLOSED
      ? 'font-semibold text-gray-900'
      : 'text-gray-600';
  }

  handleOpenIssueClick() {
    this.openIssue.emit();
  }

  handleCloseIssueClick() {
    this.closeIssue.emit();
  }

  handleSetLabelClick(label: string | number | null) {
    const option = label as string;
    this.setLabel.emit(option);
  }

  handleSetMilestoneClick(milestone: string | number | null) {
    const option = milestone as string;
    this.setMilestone.emit(option);
  }
}
