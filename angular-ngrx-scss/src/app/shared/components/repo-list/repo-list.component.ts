import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReposState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
})
export class RepoListComponent {
  @Input()
  repos$?: Observable<UserReposState[]>;
}
