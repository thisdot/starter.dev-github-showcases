import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-repo-action-buttons',
	templateUrl: './repo-action-buttons.component.html',
	styleUrls: ['./repo-action-buttons.component.css'],
})
export class RepoActionButtonsComponent {
	@Input() owner = '';
	@Input() name = '';
	@Input() watchers = 0;
	@Input() stargazers = 0;
	@Input() forks = 0;
}
