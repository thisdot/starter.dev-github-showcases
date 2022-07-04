import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { RouteConfigService } from '@this-dot/route-config';
import { Observable, withLatestFrom, map, delay } from 'rxjs';
import { RepoPage } from '../gql';

@Component({
  selector: 'app-file-explorer-root',
  templateUrl: './file-explorer-root.component.html',
})
export class FileExplorerRootComponent {
  repoPage$: Observable<RepoPage> = this.routeConfigService
    .getLeafConfig<RepoPage>('repoPageData')
    .pipe(
      withLatestFrom(
        this.route.paramMap.pipe(map((params: ParamMap) => params.get('path'))),
      ),
      map(([res, path]) => ({
        ...res,
        owner: res.owner,
        name: res.name,
        branch: res.branch,
        path: path ?? '',
        homepageUrl: res.repository?.homepageUrl,
        topics: res.repository?.topics,
      })),
      delay(2000),
    );

  constructor(
    private route: ActivatedRoute,
    private routeConfigService: RouteConfigService<string, 'repoPageData'>,
  ) {}
}
