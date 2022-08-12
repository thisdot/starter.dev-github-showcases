import { Component, Input } from '@angular/core';
import { RepoState } from 'src/app/state/repository';

@Component({
  selector: 'app-repo-heading',
  templateUrl: './repo-heading.component.html',
  styleUrls: ['./repo-heading.component.scss'],
})
export class RepositoryHeadingComponent {
  @Input()
  repo?: RepoState;
  @Input() owner = '';
  @Input() name = '';

  get ownerPath(): string {
    return `/${this.owner}`;
  }

  get visibility(): string {
    if (this.repo) {
      return this.repo.visibility ? 'Private' : 'Public';
    } else {
      return '';
    }
  }
}
