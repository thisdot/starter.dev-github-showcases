import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProfileState } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-profile-about',
  templateUrl: './profile-about.component.html',
  styleUrls: ['./profile-about.component.scss'],
})
export class ProfileAboutComponent {
  profile$ = this.store.select(selectProfileState);

  constructor(private store: Store) {}
}
