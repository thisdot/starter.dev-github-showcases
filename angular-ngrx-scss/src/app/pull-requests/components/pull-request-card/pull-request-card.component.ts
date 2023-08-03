import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RepoPullRequest } from '../../../state/repository';

@Component({
  selector: 'app-pull-request-card',
  templateUrl: './pull-request-card.component.html',
  styleUrls: ['./pull-request-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PullRequestCardComponent {
  @Input() pullRequest!: RepoPullRequest;

  colorMap(color: string): string {
    switch (color) {
      case 'D4C5F9': // violet
        return '#ddd6fe';
      case '310D85': // dark purple
        return '#c084fc';
      case '6ED842': // bright yellow green
        return '#bef264';
      case 'ED1DB5': // hot pink
        return '#f9a8d4';
      default:
        return `#${color}`;
    }
  }
}
