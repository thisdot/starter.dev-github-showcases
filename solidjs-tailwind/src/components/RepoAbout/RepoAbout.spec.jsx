import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { RepoAboutWidget } from './RepoAbout';

vi.mock('../../contexts/RepoContext', async () => {
  const actual = await vi.importActual('../../contexts/RepoContext');
  return {
    ...actual,
    useRepo: () => ({
      info: () => ({
        info: {
          isPrivate: false,
          forkCount: 9,
          description: 'test',
          homepageUrl: '',
          stargazerCount: 46,
          watcherCount: 19,
          openIssueCount: 186,
          topics: ['angular', 'apollo-client', 'tailwindcss', 'github'],
          isOrg: true,
          openPullRequestCount: 32,
        },
      }),
      readme: 'text',
    }),
  };
});

describe('Repo About', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <RepoAboutWidget />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show contents', async () => {
    const contents = await wrapper.findByTestId('about-info');
    const topic = await wrapper.findByText('test');
    expect(contents).toBeVisible();
    expect(topic).toBeVisible();
  });
});
