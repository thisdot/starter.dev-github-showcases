import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ParamMap, ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable, map, switchMap } from 'rxjs';
import {
  FileExplorer,
  FileExplorerData,
  FileExplorerVars,
  REPO_TREE_QUERY,
} from 'src/app/gql';
import { getReadMeFileName, parseTree } from '../parse-tree';

const removeLastPathPart = (path: string) => {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
};

@Component({
  selector: 'app-file-explorer-list-container',
  templateUrl: './file-explorer-list-container.component.html',
  styleUrls: ['./file-explorer-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerListContainerComponent {
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
          map((res) => {
            const items = parseTree(res.data.repository.tree);
            const readme = getReadMeFileName(items);

            return {
              ...res,
              path,
              items,
              readme,
            };
          }),
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
}
