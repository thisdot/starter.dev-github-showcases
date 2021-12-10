import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-action-buttons',
  templateUrl: './repo-action-buttons.component.html',
  styleUrls: ['./repo-action-buttons.component.css'],
})
export class RepoActionButtonsComponent {
  @Input() owner: string = '';
  @Input() name: string = '';
  @Input() watchers: number = 0;
  @Input() stargazers: number = 0;
  @Input() forks: number = 0;
}
