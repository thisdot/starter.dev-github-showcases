import {
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import {
  RepoContents,
  fetchRepository,
  selectedRepository,
} from '../../state/repository';
import { map, take, takeWhile, tap } from 'rxjs';

@Component({
  selector: 'app-file-explorer',
  templateUrl: './file-explorer.component.html',
  styleUrls: ['./file-explorer.component.scss'],
})
export class FileExplorerComponent implements OnInit, OnDestroy {
  @ViewChild('readme') readmeContainer: ElementRef | undefined;

  private componentActive = true;

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
    tap(() => {
      // make sure the readme is scrolled into view if the fragment is set
      // we need to wait for the readme to be rendered before we can scroll to it
      this.zone.onStable.pipe(take(1)).subscribe(() => {
        if (this.route.snapshot.fragment === 'readme') {
          this.readmeContainer?.nativeElement?.scrollIntoView();
        }
      });
    }),
  );

  constructor(
    private route: ActivatedRoute,
    private store: Store,
    private zone: NgZone,
  ) {}

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

  ngOnDestroy() {
    this.componentActive = false;
  }
}
