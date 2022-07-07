import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { FileExplorer, RepoPage, RepoTreeGQL } from '../../gql';
import { getReadMeFileName, parseTree } from '../parse-tree';

const removeLastPathPart = (path: string) => {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
};

const DEFAULT_REPO_TREE_STATE = Object.freeze({
  items: undefined,
  readme: undefined,
});

@Component({
  selector: 'app-file-explorer-list-container',
  templateUrl: './file-explorer-list-container.component.html',
  styleUrls: ['./file-explorer-list-container.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerListContainerComponent implements OnChanges {
  @Input() repoPage?: RepoPage | null;

  _repoTreeLoadError?: unknown;

  get repoTreeLoadError(): unknown | undefined {
    return this._repoTreeLoadError;
  }

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

  repoTree$!: Observable<FileExplorer>;

  constructor(private repoTreeGQL: RepoTreeGQL) {
    this.resetRepoTree();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const repoPageChange = changes['repoPage'];
    if (repoPageChange) {
      this.loadRepoTree();
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
    this.resetRepoTree();
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
      catchError((err) => {
        console.error(err);
        this._repoTreeLoadError = err;
        return of(DEFAULT_REPO_TREE_STATE);
      }),
    );
  }

  private resetRepoTree(): void {
    this._repoTreeLoadError = undefined;
    this.repoTree$ = of(DEFAULT_REPO_TREE_STATE);
  }
}
