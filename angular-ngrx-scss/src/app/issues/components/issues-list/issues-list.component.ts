import { Component, Input } from '@angular/core';
import { RepoIssues } from 'src/app/state/repository';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
})
export class IssuesListComponent {
  @Input() issues: RepoIssues | null = null;
}
