import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { FileExplorer, RepoPage, RepoTreeGQL } from '../../gql';
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
export class FileExplorerListContainerComponent implements OnInit, OnChanges {
  private initialized = false;
  @Input() repoPage?: RepoPage | null;

  public get owner(): string {
    return this.repoPage?.owner || '';
  }

  public get name(): string {
    return this.repoPage?.name || '';
  }

  public get branch(): string {
    return this.repoPage?.branch || '';
  }

  public get path(): string {
    return this.repoPage?.path || '';
  }

  repoTree$: Observable<FileExplorer> = of({
    items: undefined,
    readme: undefined,
  });

  constructor(private repoTreeGQL: RepoTreeGQL) {}

  ngOnInit(): void {
    this.initialized = true;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.initialized) {
      const repoPageChange = changes['repoPage'];
      if (repoPageChange) {
        this.loadRepoTree();
      }
    }
  }

  getBackLink(path: string): string | undefined {
    if (!this.repoPage) return;
    const basePath = `/${this.owner}/${this.name}`;
    const backPath = removeLastPathPart(path);
    const treePath = `${basePath}/tree/${this.branch}`;
    return backPath ? `${treePath}/${backPath}` : basePath;
  }

  getVariables() {
    if (!this.repoPage) return { owner: '', name: '', expression: '' };
    return {
      owner: this.owner,
      name: this.name,
      expression: `${this.branch}:${this.path ?? ''}`,
    };
  }

  private loadRepoTree(): void {
    const vars = this.getVariables();
    this.repoTree$ = this.repoTreeGQL.fetch(vars).pipe(
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
}
