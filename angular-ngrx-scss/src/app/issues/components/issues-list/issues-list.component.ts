import { Component, Input } from '@angular/core';
import { Issue } from 'src/app/repository/services/repository.interfaces';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
})
export class IssuesListComponent {
  @Input() issues: Issue[] = [];
}
