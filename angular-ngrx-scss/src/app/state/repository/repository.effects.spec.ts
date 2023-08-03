import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';

import { RepositoryEffects } from './repository.effects';
import { RepositoryService } from '../../repository/services/repository.service';
import {
  fetchRepository,
  fetchRepositorySuccess,
  fetchRepositoryFailure,
  fetchFileContents,
  fetchFileContentsFailure,
} from './repository.actions';
import {
  ReadmeApiResponse,
  RepoApiResponse,
  RepositoryState,
} from './repository.state';
import { UserApiResponse } from '../user';
import { PullRequests } from 'src/app/repository/services/repository.interfaces';

const MOCK_PULL_REQUESTS: PullRequests = [
  {
    title: 'Et quis culpa ex sapiente dolores qui quo qui.',
    number: 12,
    user: {
      login: 'user',
      avatar_url: 'http://localhost',
      gravatar_id: 'user',
      type: '',
      site_admin: false,
    },
    closed_at: '2022-07-01T23:46:12Z',
    created_at: '2022-07-01T23:46:12Z',
  },
  {
    title: 'Another test pull request.',
    number: 13,
    user: {
      login: 'user2',
      avatar_url: 'http://localhost',
      gravatar_id: 'user2',
      type: '',
      site_admin: false,
    },
    closed_at: '2022-07-02T23:46:12Z',
    created_at: '2022-07-02T23:46:12Z',
  },
];

const MOCK_REPO_INFO: RepoApiResponse = {
  id: 1,
  node_id: '',
  name: 'starter.dev-github-showcases',
  full_name: '',
  owner: {} as UserApiResponse,
  private: false,
  html_url: '',
  description: 'A collection of GitHub clone implementations.',
  fork: false,
  url: '',
  archive_url: '',
  assignees_url: '',
  blobs_url: '',
  branches_url: '',
  collaborators_url: '',
  comments_url: '',
  commits_url: '',
  compare_url: '',
  contents_url: '',
  contributors_url: '',
  deployments_url: '',
  downloads_url: '',
  events_url: '',
  forks_url: '',
  git_commits_url: '',
  git_refs_url: '',
  git_tags_url: '',
  git_url: '',
  issue_comment_url: '',
  issue_events_url: '',
  issues_url: '',
  keys_url: '',
  labels_url: '',
  languages_url: '',
  merges_url: '',
  milestones_url: '',
  notifications_url: '',
  pulls_url: '',
  releases_url: '',
  ssh_url: '',
  stargazers_url: '',
  statuses_url: '',
  subscribers_url: '',
  subscription_url: '',
  tags_url: '',
  teams_url: '',
  trees_url: '',
  clone_url: '',
  mirror_url: '',
  hooks_url: '',
  svn_url: '',
  homepage: 'https://starter.dev',
  language: null,
  forks_count: 10,
  forks: 10,
  stargazers_count: 10,
  watchers_count: 10,
  watchers: 10,
  size: 10,
  default_branch: '',
  open_issues_count: 10,
  open_issues: 10,
  is_template: false,
  topics: ['react', 'angular', 'vue', 'github'],
  has_issues: false,
  has_projects: false,
  has_wiki: false,
  has_pages: false,
  has_downloads: false,
  archived: false,
  disabled: false,
  visibility: 'public',
  pushed_at: '',
  created_at: '',
  updated_at: '',
  permissions: {
    pull: false,
    push: false,
    admin: false,
  },
  allow_rebase_merge: false,
  temp_clone_token: '',
  allow_squash_merge: false,
  allow_auto_merge: false,
  delete_branch_on_merge: false,
  allow_merge_commit: false,
  subscribers_count: 10,
  network_count: 10,
  license: {
    key: '',
    name: '',
    spdx_id: '',
    url: '',
    node_id: '',
  },
};

const MOCK_README: ReadmeApiResponse = {
  name: '',
  path: '',
  sha: '',
  size: 0,
  url: '',
  html_url: '',
  git_url: '',
  download_url: '',
  type: '',
  content: 'some readme text',
  encoding: '',
  _links: {
    self: '',
    git: '',
    html: '',
  },
};

// TODO: related to broken test below
// const MOCK_FILE_CONTENTS: FileContentsApiResponse = {
//   content: 'This is a readme file',
//   name: 'starter.dev-github-showcases',
//   type: 'file',
//   size: 223,
//   path: '',
//   sha: '',
//   url: '',
//   html_url: '',
//   git_url: '',
//   download_url: '',
//   encoding: '',
//   _links: {
//     self: '',
//     git: '',
//     html: '',
//   },
// };

describe('RepositoryEffects', () => {
  let actions$: Observable<Action>;
  let effects: RepositoryEffects;
  let repoServiceMock: jasmine.SpyObj<RepositoryService>;

  beforeEach(() => {
    repoServiceMock = jasmine.createSpyObj('RepoService', [
      'getRepositoryInfo',
      'getRepositoryPullRequests',
      'getRepositoryContents',
      'getRepositoryReadme',
      'getFileContents',
    ]);
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
    const expectedResponseData: RepositoryState = {
      description: 'A collection of GitHub clone implementations.',
      forkCount: 10,
      issueCount: 10,
      ownerName: 'thisdot',
      prCount: 2,
      readme: 'some readme text',
      repoName: 'starter.dev-github-showcases',
      starCount: 10,
      tags: ['react', 'angular', 'vue', 'github'],
      tree: [],
      openPullRequests: null,
      closedPullRequests: null,
      activeBranch: '',
      selectedFile: null,
      visibility: 'public',
      watchCount: 10,
      website: 'https://starter.dev',
    };

    repoServiceMock.getRepositoryInfo.and.returnValue(of(MOCK_REPO_INFO));
    repoServiceMock.getRepositoryPullRequests.and.returnValue(
      of(MOCK_PULL_REQUESTS),
    );
    repoServiceMock.getRepositoryContents.and.returnValue(of([]));
    repoServiceMock.getRepositoryReadme.and.returnValue(of(MOCK_README));

    effects.fetchRepository$.subscribe((action) => {
      expect(action).toEqual(
        fetchRepositorySuccess({ repoData: expectedResponseData }),
      );
      done();
    });
  });

  it('should call the repoService and return a failure action on a failed call', (done) => {
    actions$ = of(
      fetchRepository({
        owner: 'notthisdot',
        repoName: 'null',
      }),
    );

    const expectedError = {
      message: 'error',
    };

    repoServiceMock.getRepositoryInfo.and.returnValue(
      throwError(() => expectedError),
    );

    effects.fetchRepository$.subscribe((action) => {
      expect(action).toEqual(fetchRepositoryFailure({ error: expectedError }));
      done();
    });
  });

  describe('fetchFileContents$', () => {
    // TODO: Because we use atob on the content strings expecting they are encoded, this test is failing since we are passing in a direct string. Needs to be updated to mock the encoding so the test can pass.

    // it('should dispatch "fetchFileContentsSuccess" action if call to fetch file content is successful', (done) => {
    //   actions$ = of(
    //     fetchFileContents({
    //       owner: 'thisdot',
    //       repoName: 'starter.dev-github-showcases',
    //       path: 'README.md',
    //       commitOrBranchOrTagName: 'main',
    //     }),
    //   );

    //   const expectedResponseData: FileContents = {
    //     content: 'This is a readme file',
    //     name: 'starter.dev-github-showcases',
    //     type: 'file',
    //     size: 223,
    //   };

    //   repoServiceMock.getFileContents.and.returnValue(of(MOCK_FILE_CONTENTS));

    //   effects.fetchFileContents$.subscribe((action) => {
    //     expect(action).toEqual(
    //       fetchFileContentsSuccess({ fileContents: expectedResponseData }),
    //     );
    //     done();
    //   });
    // });

    it('should dispatch "fetchFileContentsFailure" action if call to fetch file content is unsuccessful', (done) => {
      actions$ = of(
        fetchFileContents({
          owner: 'thisdot',
          repoName: 'starter.dev-github-showcases',
          path: 'README.md',
          commitOrBranchOrTagName: 'main',
        }),
      );

      const expectedError = {
        message: 'error',
      };

      repoServiceMock.getFileContents.and.returnValue(
        throwError(() => expectedError),
      );

      effects.fetchFileContents$.subscribe((action) => {
        expect(action).toEqual(
          fetchFileContentsFailure({
            error: expectedError,
          }),
        );
        done();
      });
    });
  });
});
