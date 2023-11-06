import { setActivePinia, createPinia } from 'pinia';
import { useRepoStore } from '@/store/repoStore/repoStore';
import { mswServer } from '@/test/__mocks__/mswServer';

beforeAll(() => mswServer.listen());
afterEach(() => mswServer.resetHandlers());
afterAll(() => mswServer.close());

describe('RepoStore', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia());
  });

  it('should get the repo info', async () => {
    const repoStore = useRepoStore();

    await repoStore.getRepoInfo('test', 'test-repo');

    expect(repoStore.selectedRepository?.name).toBe('test-repo');
    // TODO: add more assertions
  });
});
