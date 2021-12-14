import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-meta',
  templateUrl: './repo-meta.component.html',
  styleUrls: ['./repo-meta.component.css'],
})
export class RepoMetaComponent {
  @Input() language: string | undefined;
  @Input() forkCount?: number = 0;
  @Input() stargazerCount?: number = 0;
  @Input() updatedAt: string | undefined;
}
