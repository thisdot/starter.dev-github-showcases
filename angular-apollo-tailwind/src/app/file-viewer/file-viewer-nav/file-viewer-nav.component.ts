import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-file-viewer-nav',
  templateUrl: './file-viewer-nav.component.html',
  styleUrls: ['./file-viewer-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileViewerNavComponent implements OnInit {
  @Input() owner: string = '';
  @Input() name: string = '';
  @Input() branch: string = 'master';
  @Input() path: string = '';

  crumbs: string[] = [];
  crumbPath: string = '';
  href: string = '';

  ngOnInit(): void {
    // TODO: enable for breadcrumbs
    // tap((repo) => {
    //   const path = repo.tree.entries.path;
    //   this.crumbs = path.split('/').filter(Boolean);
    //   this.crumbPath = this.crumbs.join('/'); // make pipe?
    //   this.href = `/${this.owner}/${this.name}/tree/${this.branch}/${this.crumbPath}`;
    // })
  }
}
