import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import { fetchRepository, selectRepositoryState } from '../../state/repository';

@Component({
  selector: 'app-file-explorer-root',
  templateUrl: './file-explorer-root.component.html',
  styleUrls: ['./file-explorer-root.component.scss'],
})
export class FileExplorerRootComponent implements OnInit {
  repo$ = this.store.select(selectRepositoryState);

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    const owner = this.route.snapshot.paramMap.get('owner') as string;
    const repoName = this.route.snapshot.paramMap.get('repo') as string;
    this.store.dispatch(fetchRepository({ owner, repoName }));
  }
}
