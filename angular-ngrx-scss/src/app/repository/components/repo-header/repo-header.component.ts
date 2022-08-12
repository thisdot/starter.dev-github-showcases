import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedRepository } from 'src/app/state/repository';

@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
  styleUrls: ['./repo-header.component.scss'],
})
export class RepositoryHeaderComponent {
  @Input() owner = '';
  @Input() name = '';

  repo$ = this.store.select(selectedRepository);

  constructor(private store: Store) {}

  get basePath(): string {
    return `/${this.owner}/${this.name}`;
  }
}
