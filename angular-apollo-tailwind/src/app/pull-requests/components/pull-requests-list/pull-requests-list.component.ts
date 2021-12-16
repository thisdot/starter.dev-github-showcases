import { Component, Input } from '@angular/core';
import { PullRequestFormatted } from 'src/app/gql';

@Component({
  selector: 'app-pull-requests-list',
  templateUrl: './pull-requests-list.component.html',
  styleUrls: ['./pull-requests-list.component.css'],
})
export class PullRequestsListComponent {
  @Input() pullRequests: PullRequestFormatted[] = [];

  readonly baseDate = new Date();

  getColor(color: string) {
    return { 'background-color': `#${color}` };
  }
}
