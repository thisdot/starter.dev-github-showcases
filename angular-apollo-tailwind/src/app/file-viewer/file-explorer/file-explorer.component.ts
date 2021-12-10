import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

const removeLastPathPart = (path: string) => {
  const pathParts = path.split('/');
  return pathParts.slice(0, pathParts.length - 1).join('/');
};

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerComponent implements OnInit {
  @Input() items: any[] = [];
  @Input() branch: string = '';
  @Input() basePath: string = '';
  @Input() repoPath: string = '';
  @Input() isLoaded: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  setBackLink(repoPath: string) {
    const backPath = removeLastPathPart(repoPath);
    return `${this.basePath}/tree/${this.branch}/${backPath}`;
  }

  setPathHref(item: any): string {
    return `${this.basePath}/${item.type}/${this.branch}/${item.path}`;
  }
}
