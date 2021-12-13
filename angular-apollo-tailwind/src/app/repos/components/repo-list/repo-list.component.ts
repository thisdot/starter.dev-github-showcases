import { Component, Input } from '@angular/core';
import { CurrentUserRepos } from 'src/app/gql';

@Component({
	selector: 'app-repo-list',
	templateUrl: './repo-list.component.html',
	styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent {
	@Input() repos: CurrentUserRepos[] = [];
}
