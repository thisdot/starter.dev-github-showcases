import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable, of } from 'rxjs';
import { CurrentUser, CurrentUserData, CURRENT_USER_QUERY } from '../gql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user$: Observable<CurrentUser | null> = of(null);

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.user$ = this.apollo
      .watchQuery<CurrentUserData>({ query: CURRENT_USER_QUERY })
      .valueChanges.pipe(map((res) => res.data.viewer));
  }
}
