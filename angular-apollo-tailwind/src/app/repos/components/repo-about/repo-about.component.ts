import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-about',
  templateUrl: './repo-about.component.html',
  styleUrls: ['./repo-about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoAboutComponent {
  @Input() isRepoLoading = false;
  @Input() description = '';
}
