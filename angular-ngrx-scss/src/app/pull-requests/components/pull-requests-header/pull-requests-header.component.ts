import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-pull-requests-header',
  templateUrl: './pull-requests-header.component.html',
  styleUrls: ['./pull-requests-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullRequestsHeaderComponent {}
