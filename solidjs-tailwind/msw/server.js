import { setupServer } from 'msw/node';
import { beforeAll, afterAll, afterEach } from 'vitest';

const handlers = [];

export const server = setupServer(...handlers);

export function setupMswServer() {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
}
