import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { ISSUE_STATE, RepoPullRequests } from '../../../state/repository';

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

  changeViewState(state: ISSUE_STATE) {
    this.viewState = state;
    this.viewStateChange.emit(this.viewState);
  }
}
