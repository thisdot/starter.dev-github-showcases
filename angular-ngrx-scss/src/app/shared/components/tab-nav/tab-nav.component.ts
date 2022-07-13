import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProfileState } from 'src/app/state/profile/profile.selectors';

@Component({
  selector: 'app-tab-nav',
  templateUrl: './tab-nav.component.html',
  styleUrls: ['./tab-nav.component.scss'],
})
export class TabNavComponent {
  profile$ = this.store.select(selectProfileState);

  constructor(private store: Store) {}
}
