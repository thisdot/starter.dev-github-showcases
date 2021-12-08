import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable, of, map } from 'rxjs';
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
export class RepoDetailsViewComponent implements OnInit {
  repos$: Observable<RepoDetailsData | null> = of(null);

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.repos$ = this.apollo
      .watchQuery<RepoDetailsData, RepoDetailsVars>({
        query: REPO_DETAILS_QUERY,
      })
      .valueChanges.pipe(map((res) => res.data));
  }
}
