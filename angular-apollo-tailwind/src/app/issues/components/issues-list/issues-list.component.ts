import { Component, Input } from '@angular/core';
import { IssueFormatted } from 'src/app/gql/models/repo-issues';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css'],
})
export class IssuesListComponent {
  @Input() issues: IssueFormatted[] = [];

  readonly baseDate = new Date();

  getColor(color: string) {
    return { 'background-color': `#${color}` };
  }

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
        return '';
    }
  }
}
