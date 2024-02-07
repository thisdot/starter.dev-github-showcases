import { HttpClient, HttpParams } from '@angular/common/http';
import { of } from 'rxjs';
import {
  UserGist,
  UserOrg,
  UserRepo,
} from 'src/app/state/profile/profile.state';
import { UserApiResponse } from 'src/app/state/user';
import { UserService } from './user.service';

describe('UserService', () => {
  let userService: UserService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    userService = new UserService(httpClientSpy);
  });

  it('should be created', () => {
    expect(userService).toBeTruthy();
  });

  it('should return user data from the GitHub API', (done) => {
    const expectedHttpResponse = {
      avatar_url: 'testuser_url',
      bio: '',
      blog: '',
      company: '',
      email: '',
      followers: 0,
      following: 0,
      location: '',
      login: 'testuser',
      name: '',
      twitter_username: '',
      type: 'User',
    } as UserApiResponse;

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    userService.getAuthenticatedUserInfo().subscribe({
      next: (userInfo) => {
        expect(userInfo).toEqual(expectedHttpResponse);

        expect(httpClientSpy.get).toHaveBeenCalledOnceWith(
          `https://api.github.com/user`,
        );
      },
      complete: done,
    });
  });

  it('should return organizations the user belongs to from the GitHub API', (done) => {
    const expectedHttpResponse: Partial<UserOrg>[] = [
      {
        login: 'Fake Org 1',
        id: 0,
        url: '',
        description: 'Org 1',
      },
      {
        login: 'Fake Org 2',
        id: 1,
        url: '',
        description: 'Org 2',
      },
      {
        login: 'Fake Org 3',
        id: 2,
        url: '',
        description: 'Org 3',
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    userService.getUserOrganizations('thisdot').subscribe({
      next: () => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/users/thisdot/orgs`,
        );
      },
      complete: done,
    });
  });

  it('should return the authenticated users repositories from the Github API', (done) => {
    const expectedHttpResponse: Partial<UserRepo>[] = [
      {
        name: 'Repo-test',
        description: 'This is a repo test',
        language: 'TypeScript',
        license: null,
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        } as UserApiResponse,
      },
      {
        name: 'Repo-test-2',
        description: 'This is a repo test 2',
        language: 'Javascript',
        license: null,
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        } as UserApiResponse,
      },
      {
        name: 'Repo-test-3',
        description: 'This is a repo test 2',
        language: 'Javascript',
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        } as UserApiResponse,
      },
    ];
    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    userService.getUserRepos('thisdot').subscribe({
      next: () => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/users/thisdot/repos`,
        );
      },
      complete: done,
    });
  });

  it('should return the top repositories from the Github API', (done) => {
    const expectedHttpResponse: Partial<UserRepo>[] = [
      {
        name: 'Repo-test',
        description: 'This is a repo test',
        language: 'TypeScript',
        license: null,
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        } as UserApiResponse,
      },
      {
        name: 'Repo-test-2',
        description: 'This is a repo test 2',
        language: 'Javascript',
        license: null,
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        } as UserApiResponse,
      },
      {
        name: 'Repo-test-3',
        description: 'This is a repo test 2',
        language: 'Javascript',
        private: false,
        stargazers_count: 0,
        forks_count: 0,
        updated_at: '2022-06-17T09:54:38Z',
        fork: false,
        archived: false,
        owner: {
          avatar_url: 'https://avatars.githubusercontent.com/u/22839396?v=4',
          events_url: 'https://api.github.com/users/thisdot/events{/privacy}',
          followers_url: 'https://api.github.com/users/thisdot/followers',
          following_url:
            'https://api.github.com/users/thisdot/following{/other_user}',
          gists_url: 'https://api.github.com/users/thisdot/gists{/gist_id}',
          gravatar_id: '',
          html_url: 'https://github.com/thisdot',
          id: 22839396,
          login: 'thisdot',
          node_id: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
          organizations_url: 'https://api.github.com/users/thisdot/orgs',
          received_events_url:
            'https://api.github.com/users/thisdot/received_events',
          repos_url: 'https://api.github.com/users/thisdot/repos',
          site_admin: false,
          starred_url:
            'https://api.github.com/users/thisdot/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/thisdot/subscriptions',
          type: 'Organization',
          url: 'https://api.github.com/users/thisdot',
        } as UserApiResponse,
      },
    ];
    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    userService.getUserTopRepos('thisdot').subscribe({
      next: () => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/users/thisdot/repos`,
          jasmine.objectContaining({
            params: new HttpParams({
              fromObject: {
                sort: 'updated',
                per_page: 20,
              },
            }),
          }),
        );
      },
      complete: done,
    });
  });

  it('should return the gists from the user', (done) => {
    const expectedHttpResponse: Partial<UserGist>[] = [
      {
        html_url: 'github.com/gists',
        files: { 'textfile1.txt': { filename: 'textfile1.txt' } },
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    userService.getUserGists('thisdot').subscribe({
      next: () => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/users/thisdot/gists`,
        );
      },
      complete: done,
    });
  });
});
