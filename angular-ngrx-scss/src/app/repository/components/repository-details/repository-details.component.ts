import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil, takeWhile, tap } from 'rxjs';
import { fetchRepository } from '../../../state/repository';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-repository-details',
  templateUrl: './repository-details.component.html',
  styleUrls: ['./repository-details.component.scss'],
})
export class RepositoryDetailsComponent implements OnInit, OnDestroy {
  private destroyed$ = new Subject<void>();

  constructor(private route: ActivatedRoute, private store: Store) {}

  ngOnInit() {
    this.route.paramMap
      .pipe(
        takeUntil(this.destroyed$),
        tap((params) => {
          const owner = params.get('owner') as string;
          const repoName = params.get('repo') as string;
          const branch = params.get('branch') as string;
          const path = params.get('path') as string;

          this.store.dispatch(
            fetchRepository({
              owner: owner,
              repoName: repoName,
              path: path,
              branch: branch,
            }),
          );
        }),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
