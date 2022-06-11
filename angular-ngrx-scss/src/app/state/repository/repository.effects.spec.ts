import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { RepositoryEffects } from './repository.effects';
import { RepositoryService } from '../../repository/services/repository.service';
import {
  fetchRepository,
  fetchRepositorySuccess,
  fetchRepositoryFailure,
} from './repository.actions';
import { RepoState } from './repository.state';

describe('RepositoryEffects', () => {
  let actions$: Observable<Action>;
  let effects: RepositoryEffects;
  let repoServiceMock: any;

  beforeEach(() => {
    repoServiceMock = jasmine.createSpyObj('RepoService', {
      getRepositoryInfo: () => {
        return of();
      },
    });
    TestBed.configureTestingModule({
      providers: [
        {
          provide: RepositoryService,
          useValue: repoServiceMock,
        },
        RepositoryEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(RepositoryEffects);
  });

  it('should call the repoService and return a success action on a successful call', (done) => {
    actions$ = of(
      fetchRepository({
        owner: 'thisdot',
        repoName: 'starter.dev-github-showcases',
      }),
    );
    const expectedResponseData: RepoState = {
      repoName: 'starter.dev-github-showcases',
      description: 'A collection of GitHub clone implementations.',
      website: 'starter.dev',
      visibility: 'public',
      watchCount: 100,
      starCount: 100,
      forkCount: 5,
      issueCount: 0,
      tags: ['react', 'angular', 'vue', 'github'],
    };

    repoServiceMock.getRepositoryInfo.and.returnValue(of(expectedResponseData));

    effects.fetchRepository$.subscribe((action) => {
      expect(action).toEqual(
        fetchRepositorySuccess({ repoData: expectedResponseData }),
      );
      done();
    });
  });

  // it('should call the repoService and return a failure action on a failed call', (done) => {
  //   actions$ = of(
  //     fetchRepository({
  //       owner: '',
  //       repoName: '',
  //     }),
  //   );

  //   const expectedError: object = {
  //     message: 'Not Found',
  //     documentation_url:
  //       'https://docs.github.com/rest/reference/repos#get-a-repository',
  //   };

  //   repoServiceMock.getRepositoryInfo.and.returnValue(expectedError);

  //   effects.fetchRepository$.subscribe((action) => {
  //     expect(action).toEqual(fetchRepositoryFailure({ error: expectedError }));
  //     done();
  //   });
  // });
});
