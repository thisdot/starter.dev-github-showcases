import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectProfileState } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent {
  profile$ = this.store.select(selectProfileState);
  repos$ = this.profile$.pipe(map((profile) => profile.repos ?? []));

  constructor(private store: Store) {}
}
