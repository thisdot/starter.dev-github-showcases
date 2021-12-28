import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable, map, switchMap } from 'rxjs';
import { REPO_TREE_QUERY } from 'src/app/gql';
import {
  FileExplorer,
  FileExplorerData,
  FileExplorerVars,
  TreeEntry,
} from 'src/app/gql/models/repo-tree';
import { parseTree } from '../parse-tree';

const removeLastPathPart = (path: string) => {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
};

@Component({
  selector: 'app-file-explorer-list',
  templateUrl: './file-explorer-list.component.html',
  styleUrls: ['./file-explorer-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerListComponent {
  @Input() owner = '';
  @Input() name = '';
  @Input() branch = '';

  repoTree$: Observable<FileExplorer> = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('path') as string),
    switchMap((path: string) =>
      this.apollo
        .watchQuery<FileExplorerData, FileExplorerVars>({
          query: REPO_TREE_QUERY,
          variables: {
            owner: this.owner,
            name: this.name,
            expression: `${this.branch}:${path ?? ''}`,
          },
        })
        .valueChanges.pipe(
          map((res) => ({
            ...res,
            path,
            items: parseTree(res.data.repository.tree),
          })),
        ),
    ),
  );

  constructor(private route: ActivatedRoute, private apollo: Apollo) {}

  getBackLink(path: string) {
    const basePath = `/${this.owner}/${this.name}`;
    const backPath = removeLastPathPart(path);
    const treePath = `${basePath}/tree/${this.branch}`;
    return backPath ? `${treePath}/${backPath}` : basePath;
  }

  getPathHref(item: TreeEntry): string {
    const basePath = `/${this.owner}/${this.name}`;
    return `${basePath}/${item.type}/${this.branch}/${item.path}`;
  }
}
