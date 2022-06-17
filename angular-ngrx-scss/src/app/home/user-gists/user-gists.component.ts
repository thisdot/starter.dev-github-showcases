import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectGists } from 'src/app/state/user';

@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.scss'],
})
export class UserGistsComponent {
  userGists$ = this.store.select(selectGists);

  constructor(private store: Store) {}
}
