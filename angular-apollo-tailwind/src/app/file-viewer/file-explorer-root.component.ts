import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { RouteConfigService } from '@this-dot/route-config';
import { Observable, withLatestFrom, map } from 'rxjs';
import { RepoPageDetails } from 'src/app/gql';

@Component({
  selector: 'app-file-explorer-root',
  templateUrl: './file-explorer-root.component.html',
})
export class FileExplorerRootComponent {
  repoPage$: Observable<RepoPageDetails> = this.routeConfigService
    .getLeafConfig<RepoPageDetails>('repoPageData')
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
        homepageUrl: res.homepageUrl,
        topics: res.topics,
      })),
    );

  constructor(
    private route: ActivatedRoute,
    private routeConfigService: RouteConfigService<string, 'repoPageData'>,
  ) {}
}
