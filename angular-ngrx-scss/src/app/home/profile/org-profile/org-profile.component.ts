import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectRepos } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-org-profile',
  templateUrl: './org-profile.component.html',
  styleUrls: ['./org-profile.component.scss'],
})
export class OrgProfileComponent {
  repos$ = this.store.select(selectRepos);

  constructor(private store: Store) {}
}
