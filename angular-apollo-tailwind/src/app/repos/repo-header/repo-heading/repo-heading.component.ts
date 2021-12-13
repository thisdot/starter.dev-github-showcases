import { Component, Input } from '@angular/core';
@Component({
	selector: 'app-repo-heading',
	templateUrl: './repo-heading.component.html',
	styleUrls: ['./repo-heading.component.css'],
})
export class RepoHeadingComponent {
	@Input() owner = '';
	@Input() name = '';
	@Input() isPrivate = false;
}
