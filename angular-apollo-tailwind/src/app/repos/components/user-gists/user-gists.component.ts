import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { GistDetails, UserGistsData, USER_GISTS_QUERY } from 'src/app/gql';
@Component({
  selector: 'app-user-gists',
  templateUrl: './user-gists.component.html',
  styleUrls: ['./user-gists.component.css'],
})
export class UserGistsComponent {
  gistDetails$: Observable<GistDetails> = this.apollo
    .watchQuery<UserGistsData>({
      query: USER_GISTS_QUERY,
    })
    .valueChanges.pipe(
      map((res) => ({ ...res, gists: res.data.viewer.gists.nodes })),
    );

  constructor(private apollo: Apollo) {}
}
