import { setupServer } from 'msw/node';
import { mockRepoTreeQuery } from '@components/FileExplorer/FileExplorer.mocks';

const handlers = [mockRepoTreeQuery];
export const server = setupServer(...handlers);

export function setupMswServer() {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
