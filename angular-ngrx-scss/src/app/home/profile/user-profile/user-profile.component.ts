import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRepos } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  repos$ = this.store.select(selectRepos);

  constructor(private store: Store) {}
}
