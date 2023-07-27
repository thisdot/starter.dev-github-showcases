import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import TopRepos from './TopRepos';
import { repoCardProps } from '../RepoCard/data';

describe('Top repos empty state', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <TopRepos repos={[]} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have text "No repositories found"', async () => {
    const emptyText = await wrapper.getByText('No repositories found');
    expect(emptyText).toBeVisible();
  });

  it('should not have of repo card item', async () => {
    const listItems = await wrapper.queryByTestId('repo-item');
    expect(listItems).toBeNull();
  });
});

describe('Top repos after loading', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <TopRepos repos={[repoCardProps]} login={repoCardProps.owner.login} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should not have text "No repositories found"', async () => {
    const emptyText = await wrapper.queryByText('No repositories found');
    expect(emptyText).toBeNull();
  });

  it(`should have 1 number of repo card item(s)`, async () => {
    const listItems = await wrapper.findAllByTestId('repo-item');
    expect(listItems.length).toBe(1);
  });

  it('should have a link to view all repositories', async () => {
    const ele = await wrapper.getByText('View all repositories');
    expect(ele.closest('a')).toHaveAttribute(
      'href',
      `/${repoCardProps.owner.login}`
    );
  });
});
