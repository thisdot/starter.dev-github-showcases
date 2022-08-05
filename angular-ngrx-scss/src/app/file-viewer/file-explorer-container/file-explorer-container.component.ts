import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RepoContents } from '../../state/repository';

@Component({
  selector: 'app-file-explorer-container',
  templateUrl: './file-explorer-container.component.html',
  styleUrls: ['./file-explorer-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerContainerComponent {
  @Input() repoPage!: RepoContents[] | null;
  @Input() owner = '';
  @Input() name = '';
  @Input() branch = '';

  getPathHref(item: RepoContents): string {
    const basePath = `/${this.owner}/${this.name}`;
    return `${basePath}/${item.type === 'dir' ? 'tree' : 'blob'}/${
      this.branch
    }/${item.path}`;
  }
}
