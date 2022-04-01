import { setupServer } from 'msw/node';
import { mockRepoTreeQuery } from '@components/FileExplorer/FileExplorer.mocks';
import { mockRepoPageQuery } from '@components/RepoPage/RepoPage.mocks';
import { mockRepoFileQuery } from '@components/FileViewer/FileViewer.mocks';
import { mockCurrentUserQuery } from '@components/UserDropdown/UserDropdown.mocks';
import { mockUserProfileQuery } from '@components/UserProfile/UserProfile.mocks';
import { mockUserReposQuery } from '@components/UserRepos/UserRepos.mocks';
import { mockUserTopReposQuery } from '@components/UserTopRepos/UserTopRepos.mocks';
import { mockUserGistsQuery } from '@components/UserGists/UserGists.mocks';
import { mockRepoIssuesQuery } from '@components/RepoIssues/RepoIssues.mocks';
import { mockRepoPullsQuery } from '@components/RepoPulls/RepoPulls.mocks';
import { mockRepoReadMeQuery } from '@components/RepoReadMe/RepoReadMe.mocks';
import { mockOrgProfileQuery } from '@components/OrgProfile/OrgProfile.mocks';

const handlers = [
  mockRepoTreeQuery,
  mockRepoPageQuery,
  mockRepoFileQuery,
  mockCurrentUserQuery,
  mockUserProfileQuery,
  mockUserReposQuery,
  mockUserTopReposQuery,
  mockUserGistsQuery,
  mockRepoIssuesQuery,
  mockRepoPullsQuery,
  mockRepoReadMeQuery,
  mockOrgProfileQuery,
];
export const server = setupServer(...handlers);

export function setupMswServer() {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
