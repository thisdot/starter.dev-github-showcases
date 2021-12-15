import { Component } from '@angular/core';
import { RouteConfigService } from '@this-dot/route-config';
import { Apollo } from 'apollo-angular';
import { Observable, map, switchMap } from 'rxjs';
import { ResolvedRepoDetails } from '../gql';
import {
  FileExplorer,
  FileExplorerData,
  FileExplorerVars,
  TreeEntry,
  RepoTree as Tree,
} from '../gql/models/file-explorer';
import { REPO_TREE_QUERY } from '../gql/queries/file-explorer.query';

@Component({
  selector: 'app-file-viewer',
  templateUrl: './file-viewer.component.html',
  styleUrls: ['./file-viewer.component.css'],
})
export class FileViewerComponent {
  repoDetails$: Observable<FileExplorer> = this.routeConfigService
    .getLeafConfig<ResolvedRepoDetails>('userDetails')
    .pipe(
      switchMap(({ owner, name, branch, path, repository }) =>
        this.apollo
          .watchQuery<FileExplorerData, FileExplorerVars>({
            query: REPO_TREE_QUERY,
            variables: {
              owner,
              name,
              expression: `${branch}:${path}`,
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
