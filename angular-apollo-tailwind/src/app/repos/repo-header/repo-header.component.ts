import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
  styleUrls: ['./repo-header.component.css'],
})
export class RepoHeaderComponent {
  @Input() owner: string = '';
  @Input() name: string = '';
  @Input() isPrivate: boolean = false;
  @Input() watchers: number = 0;
  @Input() stargazers: number = 0;
  @Input() forks: number = 0;
  @Input() basePath: string = '';
}
