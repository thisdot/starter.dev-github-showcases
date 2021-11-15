import { setupServer } from 'msw/node';
import { mockRepoTreeQuery } from '@components/FileExplorer/FileExplorer.mocks';
import { mockRepoPageQuery } from '@components/RepoPage/RepoPage.mocks';
import { mockRepoFileQuery } from '@components/FileViewer/FileViewer.mocks';
import { mockCurrentUserQuery } from '@components/UserDropdown/UserDropdown.mocks';

const handlers = [
  mockRepoTreeQuery,
  mockRepoPageQuery,
  mockRepoFileQuery,
  mockCurrentUserQuery,
];
export const server = setupServer(...handlers);

export function setupMswServer() {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
