import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as UserSelectors from '../../state/user';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  userAvatar$ = this.store.select(UserSelectors.selectUserAvatar);
  constructor(private store: Store) {}
}
