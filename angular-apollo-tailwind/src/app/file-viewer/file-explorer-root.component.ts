import { Component } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { Observable, withLatestFrom, map, switchMap } from 'rxjs';
import { ResolvedRepoDetails } from 'src/app/gql';
import {
  FileExplorer,
  FileExplorerData,
  FileExplorerVars,
  TreeEntry,
  RepoTree as Tree,
} from 'src/app/gql/models/repo-tree';
import { REPO_TREE_QUERY } from 'src/app/gql/queries/repo-tree.query';

@Component({
  selector: 'app-file-explorer-root',
  templateUrl: './file-explorer-root.component.html',
})
export class FileExplorerRootComponent {
  repoDetails$: Observable<FileExplorer> = this.routeConfigService
    .getLeafConfig<ResolvedRepoDetails>('userDetails')
    .pipe(
      withLatestFrom(
        this.route.paramMap.pipe(map((params: ParamMap) => params.get('path'))),
      ),
      switchMap(([{ owner, name, branch, repository }, path]) =>
        this.apollo
          .watchQuery<FileExplorerData, FileExplorerVars>({
            query: REPO_TREE_QUERY,
            variables: {
              owner,
              name,
              expression: `${branch}:${path ?? ''}`,
            },
          })
          .valueChanges.pipe(
            map((res) => ({
              ...res,
              owner,
              name,
              branch,
              items: this.parseQueryData(res.data.repository.tree),
              basePath: `/${owner}/${name}`,
              description: repository.description,
            })),
          ),
      ),
    );

  constructor(
    private route: ActivatedRoute,
    private routeConfigService: RouteConfigService<string, 'userDetails'>,
    private apollo: Apollo,
  ) {}

  private parseQueryData(tree: Tree) {
    const items: TreeEntry[] =
      tree.entries.map(({ name, path, type }) => {
        return {
          name,
          path: path ?? '',
          type,
        };
      }) ?? [];
    return items.sort((a, b) => {
      if (a.type === 'tree' && b.type !== 'tree') {
        return -1;
      }
      if (a.type !== 'tree' && b.type === 'tree') {
        return 1;
      }
      return a.name.localeCompare(b.name);
    });
  }
}
