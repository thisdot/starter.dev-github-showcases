import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PullRequestsComponent } from './pull-requests.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppState } from '../state';
import { fetchPullRequests, RepositoryState } from '../state/repository';

describe('PullRequestsComponent', () => {
  let component: PullRequestsComponent;
  let fixture: ComponentFixture<PullRequestsComponent>;
  let store: MockStore;
  const initialState: AppState = {
    repository: {
      selectedFile: {
        content: 'this is a readme file',
        name: 'starter.dev-github-showcases',
        type: 'file',
        size: 223,
      },
    } as RepositoryState,
  } as AppState;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [PullRequestsComponent],
      providers: [
        provideMockStore({ initialState }),
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => {
                  switch (key) {
                    case 'owner':
                      return 'thisdot';
                    case 'repo':
                      return 'starter.dev-github-showcases';
                    default:
                      return '';
                  }
                },
              },
            },
          },
        },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PullRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch action to fetch closed pull requests', (done) => {
    store.scannedActions$.subscribe((action) => {
      expect(action).toEqual(
        fetchPullRequests({
          prState: 'closed',
          owner: 'thisdot',
          repoName: 'starter.dev-github-showcases',
        }),
      );
      done();
    });
  });
});
