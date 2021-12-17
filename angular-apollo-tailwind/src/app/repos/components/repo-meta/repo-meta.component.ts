import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-meta',
  templateUrl: './repo-meta.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoMetaComponent {
  // might not have language or color so these need to be optional
  @Input() language?: string;
  @Input() languageColor?: string;
  @Input() forkCount!: number;
  @Input() stargazerCount!: number;
  @Input() updatedAt!: Date;
}
