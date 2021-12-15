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
}
