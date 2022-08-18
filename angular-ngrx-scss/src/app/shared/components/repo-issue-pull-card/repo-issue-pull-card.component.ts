import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Issue } from 'src/app/repository/services/repository.interfaces';

@Component({
  selector: 'app-repo-issue-pull-card',
  templateUrl: './repo-issue-pull-card.component.html',
  styleUrls: ['./repo-issue-pull-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoIssuePullCardComponent {
  @Input() item?: Issue;

  get isOpen(): boolean {
    return this.item?.state === 'open';
  }

  colorMap(color: string): string {
    return `#${color}`;
  }
}
