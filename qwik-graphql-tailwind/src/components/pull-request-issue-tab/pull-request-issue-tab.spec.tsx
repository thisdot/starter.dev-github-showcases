import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it, vi } from 'vitest';
import { PullRequestIssueTab } from './pull-request-issue-tab';

describe('PullRequestIssueTab component', function () {
  it('should mount', async () => {
    const { screen, render } = await createDOM();

    // Mocks useStore to return a count of 10
    vi.mock('@builder.io/qwik', async () => {
      const qwik = await vi.importActual<typeof import('@builder.io/qwik')>('@builder.io/qwik');
      return {
        ...qwik,
        useContext: () => ({
          tab: {
            activeTab: 'open',
          },
        }),
      };
    });

    await render(
      <PullRequestIssueTab
        openCount={0}
        closedCount={0}
        tabType={'pr'}
        milestonesOption={[]}
        labelOption={[]}
        sortOption={[]}
      />
    );
    expect(screen.outerHTML).toContain('Open');
    expect(screen.outerHTML).toContain('Closed');
  });
});
