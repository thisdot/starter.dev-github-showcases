import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {
  fetchRepository,
  RepoContents,
  selectedRepository,
} from '../../state/repository';
import { map, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
})
export class FileExplorerComponent implements OnDestroy {
  owner = '';
  repoName = '';
  path = '';
  branch = '';
  repo$ = this.store.select(selectedRepository).pipe(
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

  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
