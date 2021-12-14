import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { CurrentUser, CurrentUserData, CURRENT_USER_QUERY } from '../gql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user$: Observable<CurrentUser> = this.apollo
    .watchQuery<CurrentUserData>({ query: CURRENT_USER_QUERY })
    .valueChanges.pipe(map((res) => res.data.viewer));

  constructor(private apollo: Apollo) {}
}
