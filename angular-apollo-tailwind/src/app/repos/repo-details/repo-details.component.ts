import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { concatMap, map, Observable } from 'rxjs';
import { ResolvedRepoDetails } from 'src/app/gql';
import {
  ReportHeader,
  FileExplorerData,
  FileExplorerVars,
} from 'src/app/gql/models/repo-tree';
import { REPO_TREE_QUERY } from 'src/app/gql/queries/repo-tree.query';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
})
export class RepoDetailsComponent {
  headerStats$: Observable<ReportHeader> = this.route.data.pipe(
    map(({ userDetails }) => ({ ...userDetails } as ResolvedRepoDetails)),
    concatMap(({ owner, name, branch, repository }) =>
      this.apollo
        .watchQuery<FileExplorerData, FileExplorerVars>({
          query: REPO_TREE_QUERY,
          variables: {
            owner,
            name,
            expression: `${branch}:`,
          },
        })
        .valueChanges.pipe(
          map((res) => ({
            ...res,
            owner,
            name,
            basePath: `/${owner}/${name}`,
            isPrivate: repository.isPrivate,
            stargazers: repository.stargazerCount,
            forks: repository.forkCount,
            watchers: repository.watchers.totalCount,
          })),
        ),
    ),
  );

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}
}
