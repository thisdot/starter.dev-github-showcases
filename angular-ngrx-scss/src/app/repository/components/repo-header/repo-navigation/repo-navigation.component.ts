import { Component, Input } from '@angular/core';
import { RepoState } from 'src/app/state/repository';

@Component({
  selector: 'app-repo-navigation',
  templateUrl: './repo-navigation.component.html',
  styleUrls: ['./repo-navigation.component.scss'],
})
export class RepositoryNavigationComponent {
  @Input() repo?: RepoState;
  @Input() issuesCount = 0;
  @Input() pullsCount = 0;

  get basePath(): string {
    return `/${this.repo?.ownerName}/${this.repo?.repoName}`;
  }
}
