import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import RepoMeta from './RepoMeta';

describe('Repo Meta data', () => {
  const data = {
    language: 'JavaScript',
    languageColor: '#f1e05a',
    forkCount: 1,
    stargazerCount: 0,
    updatedAt: '2021-08-01T12:00:00Z',
  };

  it('should mount', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoMeta {...data} />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });

  it('should show repo language', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoMeta {...data} />
      </Router>
    ));
    const ele = await wrapper.getByText(data.language);
    expect(ele.innerHTML).toContain(data.language);
  });

  it('should not show "repository star count"', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoMeta {...data} />
      </Router>
    ));
    const ele = await wrapper.queryByTestId('repository star count');
    expect(ele).toBeNull();
  });

  it('should show "repository fork count"', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoMeta {...data} />
      </Router>
    ));
    const ele = await wrapper.queryByTestId('repository fork count');
    expect(ele?.innerHTML).toContain(data.forkCount);
  });
});
