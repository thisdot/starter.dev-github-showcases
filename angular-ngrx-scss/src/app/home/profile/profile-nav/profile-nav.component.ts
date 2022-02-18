import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectProfileState } from 'src/app/state/profile/profile.selectors';
import { ProfileState } from 'src/app/state/profile/profile.state';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss'],
})
export class ProfileNavComponent implements OnInit {
  profile$?: Observable<ProfileState>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.profile$ = this.store.select(selectProfileState);
  }
}
