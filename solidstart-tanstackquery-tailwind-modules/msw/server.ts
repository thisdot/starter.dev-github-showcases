import { setupServer } from 'msw/node';
import { beforeAll, afterAll, afterEach } from 'vitest';
import { mockReadme } from './mockReadMe';
import { mockRepoInfo } from './mockRepoInfo';
import { mockRepoTree } from './mockRepoTree';

const handlers = [mockRepoInfo, mockReadme, mockRepoTree];

export const server = setupServer(...handlers);

export function setupMswServer() {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
