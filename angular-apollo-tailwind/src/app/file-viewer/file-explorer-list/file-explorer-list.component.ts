import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TreeEntry } from 'src/app/gql/models/repo-tree';

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
  @Input() items: TreeEntry[] = [];

  getPathHref(item: TreeEntry): string {
    const basePath = `/${this.owner}/${this.name}`;
    return `${basePath}/${item.type}/${this.branch}/${item.path}`;
  }
}
