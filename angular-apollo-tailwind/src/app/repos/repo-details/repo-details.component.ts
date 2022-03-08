import { Component } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { map, Observable, switchMap } from 'rxjs';
import { RepoPage, ReportHeader, RepoTreeGQL } from '../../gql';

@Component({
  selector: 'app-repo-details',
  templateUrl: './repo-details.component.html',
})
export class RepoDetailsComponent {
  headerStats$: Observable<ReportHeader> = this.routeConfigService
    .getLeafConfig<RepoPage>('repoPageData')
    .pipe(
      switchMap(({ owner, name, login, branch, repository }) =>
        this.repoTreeGQL
          .watch({
            owner,
            name,
            expression: `${branch}:`,
          })
          .valueChanges.pipe(
            map((res) => ({
              owner,
              name,
              login,
              isPrivate: repository?.isPrivate,
              stargazers: repository?.stargazerCount,
              forks: repository?.forkCount,
              watchers: repository?.watcherCount,
              openIssueCount: repository?.openIssueCount,
              openPullRequestCount: repository?.openPullRequestCount,
            })),
          ),
      ),
    );

  constructor(
    private routeConfigService: RouteConfigService<string, 'repoPageData'>,
    private repoTreeGQL: RepoTreeGQL,
  ) {}
}
