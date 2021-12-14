import { Component, Input } from '@angular/core';
import { CurrentUserRepos } from 'src/app/gql';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent {
  @Input() repos: CurrentUserRepos[] = [];
  @Input() login: string | undefined;
  @Input() isPrivate = false;
  @Input() description: string | undefined;
  @Input() languageColor: string | undefined;
  @Input() forkCount?: number;
  @Input() stargazerCount?: number;
  @Input() updatedAt: string | undefined;
}
