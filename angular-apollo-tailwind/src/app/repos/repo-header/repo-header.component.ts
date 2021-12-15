import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
  styleUrls: ['./repo-header.component.css'],
})
export class RepoHeaderComponent {
  @Input() owner = '';
  @Input() name = '';
  @Input() isPrivate = false;
  @Input() watchers = 0;
  @Input() stargazers = 0;
  @Input() forks = 0;
  @Input() basePath = '';
  @Input() issuesCount = 0;
  @Input() pullsCount = 0;
}
