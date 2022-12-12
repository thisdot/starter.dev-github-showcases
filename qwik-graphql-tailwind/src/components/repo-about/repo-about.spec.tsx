import { createDOM } from '@builder.io/qwik/testing';
import { describe, it, vi } from 'vitest';
import { RepoAboutWidget } from '../../components/repo-about';

describe('RepoAbout component', function () {
  it('should mount', async () => {
    const { render } = await createDOM();

    // Mocks useStore to return a count of 10
    vi.mock('@builder.io/qwik', async () => {
      const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
      return {
        ...qwik,
        useContext: () => ({
          store: {
            info: {
              data: {
                isPrivate: 'true',
                forkCount: 10,
                description: 'Another boring repo',
                homepageUrl: 'test-page.io',
                stargazerCount: 10,
                watcherCount: 10,
                openIssueCount: 10,
                topics: [],
                isOrg: true,
                openPullRequestCount: 25,
              },
            },
          },
        }),
      };
    });

    await render(<RepoAboutWidget />);
  });
});
