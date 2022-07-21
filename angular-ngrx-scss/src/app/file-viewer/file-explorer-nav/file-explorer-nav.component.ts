import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-file-explorer-nav',
  templateUrl: './file-explorer-nav.component.html',
  styleUrls: ['./file-explorer-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerNavComponent implements OnInit {
  @Input() owner = '';
  @Input() name = '';
  @Input() branch = 'master';
  @Input() showCrumbs = true;

  @Input() set path(val: string | undefined) {
    this.crumbs = val?.split('/').filter(Boolean) as string[];
  }

  basePath = '';
  crumbs: string[] = [];

  ngOnInit(): void {
    this.basePath = `/${this.owner}/${this.name}`;
  }

  getHref(i: number): string {
    const crumbPath = this.crumbs.slice(0, i + 1).join('/');
    return `${this.basePath}/tree/${this.branch}/${crumbPath}`;
  }
}
