import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-file-explorer-about',
  templateUrl: './file-explorer-about.component.html',
  styleUrls: ['./file-explorer-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerAboutComponent {
  @Input() description: string | undefined;
  @Input() homepageUrl!: string;
  @Input() topics!: string[];
}
