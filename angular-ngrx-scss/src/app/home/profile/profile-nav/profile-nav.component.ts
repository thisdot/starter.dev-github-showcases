import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProfileState } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss'],
})
export class ProfileNavComponent {
  profile$ = this.store.select(selectProfileState);

  constructor(private store: Store) {}
}
