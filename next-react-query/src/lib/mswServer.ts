import { setupServer } from 'msw/node';
import { mockRepoTreeQuery } from '@components/FileExplorer/FileExplorer.mocks';
import { mockRepoPageQuery } from '@components/RepoPage/RepoPage.mocks';

const handlers = [mockRepoTreeQuery, mockRepoPageQuery];
export const server = setupServer(...handlers);

export function setupMswServer() {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
