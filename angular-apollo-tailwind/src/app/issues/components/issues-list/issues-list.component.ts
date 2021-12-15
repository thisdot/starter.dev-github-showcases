import { Component, Input } from '@angular/core';
import { Issue } from 'src/app/gql/models/repo-issues';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.css'],
})
export class IssuesListComponent {
  @Input() issues: Issue[] = [];

  readonly baseDate = new Date();

  makeDate(date: string) {
    return new Date(date);
  }

  getColor(color: string) {
    return { 'background-color': `#${color}` };
  }
}
