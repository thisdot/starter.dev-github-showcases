import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, vi } from 'vitest';
import { SharedState } from '~/routes/[owner]/[name]/layout-named';
import { RepoHeading } from './';

const MOCK_STORE: SharedState = {
  branch: 'master',
  isLoading: false,
  info: {
    isPrivate: false,
    stargazerCount: 10,
    forkCount: 10,
    watcherCount: 10,
    openIssueCount: 10,
    openPullRequestCount: 10,
    topics: ['info'],
    isOrg: false,
  },
};

describe('RepoHeading component', function () {
  it('should mount', async () => {
    const { render } = await createDOM();

    vi.mock('@builder.io/qwik-city', async () => {
      const qwik = await vi.importActual<typeof import('@builder.io/qwik-city')>('@builder.io/qwik-city');
      return {
        ...qwik,
        useContext: () => ({
          MOCK_STORE,
        }),
      };
    });

    await render(<RepoHeading owner="this-dot" name="repo" />);
  });
});
