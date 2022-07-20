import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { UserReposState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepoListComponent {
  @Input()
  repos?: UserReposState[] | null;
}
