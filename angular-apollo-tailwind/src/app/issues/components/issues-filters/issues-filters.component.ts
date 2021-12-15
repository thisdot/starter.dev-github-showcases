import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  Label,
  Milestones,
  OPEN_CLOSED_STATE,
} from 'src/app/gql/models/repo-issues';

@Component({
  selector: 'app-issues-filters',
  templateUrl: './issues-filters.component.html',
  styleUrls: ['./issues-filters.component.css'],
})
export class IssuesFiltersComponent {
  @Input() openCount: number | null | undefined = 0;
  @Input() closedCount: number | null | undefined = 0;
  @Input() milestones: Milestones | null = null;
  @Input() labels: Label[] | null = [];
  @Input() issueState: OPEN_CLOSED_STATE | null = OPEN_CLOSED_STATE.OPEN;
  @Input() hasActiveFilters: boolean | null = false;

  @Output() openIssue: EventEmitter<void> = new EventEmitter();
  @Output() closeIssue: EventEmitter<void> = new EventEmitter();
  @Output() setLabel: EventEmitter<string> = new EventEmitter();
  @Output() setMilestone: EventEmitter<string> = new EventEmitter();
  @Output() setSort: EventEmitter<any> = new EventEmitter();
  @Output() clearFilters: EventEmitter<any> = new EventEmitter();

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

  handleSetLabelClick(label: string) {
    this.setLabel.emit(label);
  }

  handleClearFilterClick() {
    this.clearFilters.emit();
  }
}
