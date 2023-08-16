import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { FilterOption } from 'src/app/shared/components/filter-dropdown/filter-dropdown.component';
import {
  ISSUE_STATE,
  RepoIssues,
  selectLabels,
  selectMilestones,
} from 'src/app/state/repository';

@Component({
  selector: 'app-issues-header',
  templateUrl: './issues-header.component.html',
  styleUrls: ['./issues-header.component.scss'],
})
export class IssuesHeaderComponent {
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
}
