import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-repo-about',
  templateUrl: './file-explorer-about.component.html',
  styleUrls: ['./file-explorer-about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerAboutComponent {
  @Input() isRepoLoading = false;
  @Input() description = '';
}
