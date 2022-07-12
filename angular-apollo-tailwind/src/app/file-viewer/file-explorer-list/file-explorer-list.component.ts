import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TreeEntry } from '../../gql';

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
  @Input() items?: TreeEntry[];
  @Input() skeletonCount = 10;

  private get skeletons(): undefined[] {
    return Array(this.skeletonCount).fill(undefined);
  }

  get displayItems(): (TreeEntry | undefined)[] {
    return this.items || this.skeletons;
  }

  getPathHref(item: TreeEntry): string {
    const basePath = `/${this.owner}/${this.name}`;
    return `${basePath}/${item.type}/${this.branch}/${item.path}`;
  }
}
