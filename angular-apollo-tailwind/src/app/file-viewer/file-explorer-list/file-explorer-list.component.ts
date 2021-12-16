import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TreeEntry } from 'src/app/gql/models/repo-tree';

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
  @Input() items: TreeEntry[] = [];
  @Input() branch = '';
  @Input() basePath = '';
  @Input() repoPath: string | undefined = '';
  @Input() isLoaded = false;

  getBackLink(repoPath: string) {
    const backPath = removeLastPathPart(repoPath);
    const treePath = `${this.basePath}/tree/${this.branch}`;
    return backPath ? `${treePath}/${backPath}` : this.basePath;
  }

  getPathHref(item: TreeEntry): string {
    return `${this.basePath}/${item.type}/${this.branch}/${item.path}`;
  }
}
