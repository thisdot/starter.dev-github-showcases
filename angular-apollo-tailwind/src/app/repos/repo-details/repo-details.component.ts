import { Component } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { map, Observable, switchMap } from 'rxjs';
import { RepoPageDetails } from 'src/app/gql';
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
  headerStats$: Observable<ReportHeader> = this.routeConfigService
    .getLeafConfig<RepoPageDetails>('repoPageData')
    .pipe(
      switchMap(({ owner, name, branch, repository }) =>
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
              isPrivate: repository.isPrivate,
              stargazers: repository.stargazerCount,
              forks: repository.forkCount,
              watchers: repository.watchers.totalCount,
              openIssueCount: repository.openIssues.totalCount,
              openPullRequestCount: repository.openPullRequests.totalCount,
            })),
          ),
      ),
    );

  constructor(
    private routeConfigService: RouteConfigService<string, 'repoPageData'>,
    private apollo: Apollo,
  ) {}
}
