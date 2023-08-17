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
  selectLabels,
} from '../../../state/repository';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

@Component({
  selector: 'app-pull-requests-header',
  templateUrl: './pull-requests-header.component.html',
  styleUrls: ['./pull-requests-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullRequestsHeaderComponent {
  @Input() openPullRequests!: RepoPullRequests | null;
  @Input() closedPullRequests!: RepoPullRequests | null;
  @Input() viewState: ISSUE_STATE = 'open';
  @Output() viewStateChange = new EventEmitter<ISSUE_STATE>();

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
}
