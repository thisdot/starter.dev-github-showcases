import { Component, Input } from '@angular/core';
import { formatDistance } from 'date-fns';

@Component({
  selector: 'app-repo-meta',
  templateUrl: './repo-meta.component.html',
  styleUrls: ['./repo-meta.component.css'],
})
export class RepoMetaComponent {
  @Input() language: string | undefined;
  @Input() languageColor: string | undefined;
  @Input() forkCount!: number;
  @Input() stargazerCount!: number;
  @Input() updatedAt!: Date;

  getDate(updatedAt: Date) {
    return formatDistance(new Date(updatedAt), Date.now(), {
      addSuffix: true,
    });
  }
}
