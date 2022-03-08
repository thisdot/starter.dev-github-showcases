import { Component, Input } from '@angular/core';
import { RepoPullRequest } from 'src/app/gql';

@Component({
  selector: 'app-pull-requests-list',
  templateUrl: './pull-requests-list.component.html',
  styleUrls: ['./pull-requests-list.component.css'],
})
export class PullRequestsListComponent {
  @Input() pullRequests: RepoPullRequest[] = [];

  readonly baseDate = new Date();

  colorMap(color: string): string {
    switch (color) {
      case 'D4C5F9': // violet
        return '#ddd6fe';
      case '310D85': // dark purple
        return '#c084fc';
      case '6ED842': // bright yellow green
        return '#bef264';
      case 'ED1DB5': // hot pink
        return '#f9a8d4';
      default:
        return `#${color}`;
    }
  }
}
