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

  get ownerPath(): string {
    return `/${this.repo?.ownerName}`;
  }

  get visibility(): string {
    return this.repo?.visibility || '';
  }
}
