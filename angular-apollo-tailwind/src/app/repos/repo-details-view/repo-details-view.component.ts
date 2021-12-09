import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import {
  RepoDetailsData,
  RepoDetailsVars,
  REPO_DETAILS_QUERY,
} from 'src/app/gql';

@Component({
  selector: 'app-repo-details-view',
  templateUrl: './repo-details-view.component.html',
  styleUrls: ['./repo-details-view.component.css'],
})
export class RepoDetailsViewComponent {
  repos$: Observable<RepoDetailsData> = this.apollo
    .watchQuery<RepoDetailsData, RepoDetailsVars>({
      query: REPO_DETAILS_QUERY,
    })
    .valueChanges.pipe(map((res) => res.data));

  constructor(private apollo: Apollo) {}
}
