import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CurrentUserGQL, CurrentUserQuery } from '../gql';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user$: Observable<CurrentUserQuery['viewer']> = this.currentUserGQL
    .watch()
    .valueChanges.pipe(map((res) => res.data.viewer));

  constructor(private currentUserGQL: CurrentUserGQL) {}
}
