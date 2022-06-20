import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { UserReposState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-profile-repos',
  templateUrl: './profile-repos.component.html',
  styleUrls: ['./profile-repos.component.scss'],
})
export class ProfileReposComponent {
  @Input()
  repos$?: Observable<UserReposState[]>;
}
