import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {
  fetchRepository,
  RepoContents,
  selectRepositoryState,
} from '../../state/repository';
import { map, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
})
export class FileExplorerComponent implements OnInit, OnDestroy {
  owner = '';
  repoName = '';
  path = '';
  branch = '';
  repo$ = this.store.select(selectRepositoryState).pipe(
    map((repo) => {
      const fileItems: RepoContents[] = [];
      const dirItems: RepoContents[] = [];

      repo.tree.forEach((item) => {
        if (item.type === 'dir') {
          dirItems.push(item);
        } else {
          fileItems.push(item);
        }
      });

      return { ...repo, tree: dirItems.concat(fileItems) };
    }),
  );
  private componentActive = true;

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeWhile(() => this.componentActive),
        tap((params) => {
          this.owner = params.get('owner') as string;
          this.repoName = params.get('repo') as string;
          this.branch = params.get('branch') as string;
          this.path = params.get('path') as string;
          this.store.dispatch(
            fetchRepository({
              owner: this.owner,
              repoName: this.repoName,
              path: this.path,
              branch: this.branch,
            }),
          );
        }),
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
