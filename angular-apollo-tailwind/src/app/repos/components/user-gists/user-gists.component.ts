import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { UserGistsGQL, UserGistsQuery } from '../../../gql';
@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.css'],
})
export class UserGistsComponent {
  gists$: Observable<UserGistsQuery['viewer']['gists']['nodes']> =
    this.userGistsGQL
      .watch()
      .valueChanges.pipe(map((res) => res.data.viewer.gists.nodes));

  constructor(private userGistsGQL: UserGistsGQL) {}
}
