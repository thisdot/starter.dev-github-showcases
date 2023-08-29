import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectedRepository } from 'src/app/state/repository';

@Component({
  selector: 'app-repo-header',
  templateUrl: './repo-header.component.html',
  styleUrls: ['./repo-header.component.scss'],
})
export class RepositoryHeaderComponent {
  repo$ = this.store.select(selectedRepository);

  constructor(private store: Store) {}
}
