import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRepos } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-profile-repos',
  templateUrl: './profile-repos.component.html',
  styleUrls: ['./profile-repos.component.scss'],
})
export class ProfileReposComponent {
  repos$ = this.store.select(selectRepos);

  constructor(private store: Store) {}
}
