import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { selectProfileState } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.scss'],
})
export class OrgProfileComponent {
  profile$ = this.store.select(selectProfileState);
  repos$ = this.profile$.pipe(map((profile) => profile.repos ?? []));

  constructor(private store: Store) {}
}
