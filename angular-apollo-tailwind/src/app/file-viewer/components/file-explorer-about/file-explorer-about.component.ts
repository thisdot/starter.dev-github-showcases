import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RepoPage } from 'src/app/gql';

@Component({
  selector: 'app-repo-about',
  templateUrl: './file-explorer-about.component.html',
  styleUrls: ['./file-explorer-about.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FileExplorerAboutComponent {
  @Input() repoPage?: RepoPage | null;

  get description(): string | null | undefined {
    return this.repoPage?.repository?.description;
  }

  get homepageUrl(): string | null | undefined {
    return this.repoPage?.repository?.homepageUrl;
  }

  get topics(): string[] | undefined {
    return this.repoPage?.repository?.topics;
  }

  get isLoaded(): boolean {
    return Boolean(this.repoPage);
  }
}
