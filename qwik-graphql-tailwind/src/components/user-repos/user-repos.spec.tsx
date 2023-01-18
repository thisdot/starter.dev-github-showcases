import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it, vi, beforeAll, afterEach, afterAll } from 'vitest';
import { UserRepos } from './user-repos';
import { server } from '../../mock/serverSetup';

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

const owner = 'my-username';
// Mocks useStore/useContext
vi.mock('@builder.io/qwik', async () => {
  const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
  return {
    ...qwik,
    useContext: () => ({}),
    useStore: () => ({
      searchResponse: [],
      languages: [],
    }),
  };
});

describe('UserRepos component', () => {
  it('should mount', async () => {
    const { screen, render } = await createDOM();
    await render(<UserRepos owner={owner} />);
    expect(screen.innerHTML).toBeTruthy();
  });
});
