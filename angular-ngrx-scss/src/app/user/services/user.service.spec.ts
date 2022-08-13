import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { UserGist, UserRepo } from 'src/app/state/profile/profile.state';
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
    const expectedHttpResponse: Partial<UserApiResponse> = {
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
    };

    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    userService.getAuthenticatedUserInfo().subscribe({
      next: (userInfo) => {
        expect(userInfo).toContain(expectedHttpResponse);

        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/user`,
          jasmine.objectContaining({
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }),
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
        },
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
        },
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
        },
      },
    ];
    httpClientSpy.get.and.returnValue(of(expectedHttpResponse));

    userService.getUserTopRepos().subscribe({
      next: () => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/user/repos?sort=updated&per_page=20`,
          jasmine.objectContaining({
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
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

    userService.getUserGists().subscribe({
      next: () => {
        expect(httpClientSpy.get).toHaveBeenCalledWith(
          `https://api.github.com/gists`,
          jasmine.objectContaining({
            headers: {
              Accept: 'application/vnd.github.v3+json',
            },
          }),
        );
      },
      complete: done,
    });
  });
});
