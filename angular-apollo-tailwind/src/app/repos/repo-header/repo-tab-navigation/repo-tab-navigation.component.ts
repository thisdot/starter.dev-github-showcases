import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-repo-tab-navigation',
  templateUrl: './repo-tab-navigation.component.html',
  styleUrls: ['./repo-tab-navigation.component.css'],
})
export class RepoTabNavigationComponent {
  @Input() basePath = '';
  @Input() issuesCount = 0;
  @Input() pullsCount = 0;
}
