import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-explorer-nav',
  templateUrl: './file-explorer-nav.component.html',
  styleUrls: ['./file-explorer-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerNavComponent {
  @Input() basePath = '';
  @Input() name = '';
  @Input() branch = 'master';
  @Input() set path(val: string | undefined) {
    this.crumbs = val?.split('/').filter(Boolean) as string[];
  }

  crumbs: string[] = [];

  getHref(i: number): string {
    const crumbPath = this.crumbs.slice(0, i + 1).join('/');
    return `/${this.basePath}/tree/${this.branch}/${crumbPath}`;
  }
}
