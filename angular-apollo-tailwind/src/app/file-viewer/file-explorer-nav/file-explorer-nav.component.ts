import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-explorer-nav',
  templateUrl: './file-explorer-nav.component.html',
  styleUrls: ['./file-explorer-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerNavComponent {
  @Input() owner = '';
  @Input() name = '';
  @Input() branch = 'master';
  @Input() path = '';

  crumbs: string[] = [];
  crumbPath = '';
  href = '';

  // TODO: enable for breadcrumbs
  // tap((repo) => {
  //   const path = repo.tree.entries.path;
  //   this.crumbs = path.split('/').filter(Boolean);
  //   this.crumbPath = this.crumbs.join('/'); // make pipe?
  //   this.href = `/${this.owner}/${this.name}/tree/${this.branch}/${this.crumbPath}`;
  // })
}
