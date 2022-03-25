import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { map, Observable } from 'rxjs';
import { FileExplorer, RepoTreeGQL } from '../../gql';
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
export class FileExplorerListContainerComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';
  @Input() branch = '';
  @Input() path = '';

  repoTree$!: Observable<FileExplorer>;

  constructor(private repoTreeGQL: RepoTreeGQL) {}

  ngOnInit(): void {
    this.repoTree$ = this.repoTreeGQL
      .watch({
        owner: this.owner,
        name: this.name,
        expression: `${this.branch}:${this.path ?? ''}`,
      })
      .valueChanges.pipe(
        map((res) => {
          const items = parseTree(res?.data);
          const readme = getReadMeFileName(items);

          return {
            items,
            readme,
          };
        }),
      );
  }

  getBackLink(path: string) {
    const basePath = `/${this.owner}/${this.name}`;
    const backPath = removeLastPathPart(path);
    const treePath = `${basePath}/tree/${this.branch}`;
    return backPath ? `${treePath}/${backPath}` : basePath;
  }
}
