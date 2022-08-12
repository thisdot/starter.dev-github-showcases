import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-navigation',
  templateUrl: './repo-navigation.component.html',
  styleUrls: ['./repo-navigation.component.scss'],
})
export class RepositoryNavigationComponent {
  @Input() basePath = '';
  @Input() issuesCount = 0;
  @Input() pullsCount = 0;
}
