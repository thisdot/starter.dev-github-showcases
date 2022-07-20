import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RepoState } from '../../../state/repository';

@Component({
  selector: 'app-file-explorer-about',
  templateUrl: './file-explorer-about.component.html',
  styleUrls: ['./file-explorer-about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerAboutComponent {
  @Input() repo!: RepoState | null;

  get description(): string | null | undefined {
    return this.repo?.description;
  }

  get homepageUrl(): string | null | undefined {
    return this.repo?.website;
  }

  get topics(): string[] | undefined {
    return this.repo?.tags;
  }
}
