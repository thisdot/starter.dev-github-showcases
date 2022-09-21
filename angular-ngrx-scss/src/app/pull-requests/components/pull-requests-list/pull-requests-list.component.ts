import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RepoPullRequests } from '../../../state/repository';

@Component({
  selector: 'app-pull-requests-list',
  templateUrl: './pull-requests-list.component.html',
  styleUrls: ['./pull-requests-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullRequestsListComponent {
  @Input() pullRequests!: RepoPullRequests | null;
}
