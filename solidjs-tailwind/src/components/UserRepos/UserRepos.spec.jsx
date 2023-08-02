import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import { repoCardProps } from '../RepoCard/data';
import UserRepos from './UserRepos';

describe('User repos loading state', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <UserRepos loading={true} repos={[]} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have text "Loading..."', async () => {
    const loadingText = await wrapper.getByText('Loading...');
    expect(loadingText).toBeVisible();
  });

  it('should not have of repo card item', async () => {
    const listItems = await wrapper.queryByTestId('repo-item');
    expect(listItems).toBe(null);
  });
});

describe('User repos after loading', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <UserRepos loading={false} repos={[repoCardProps]} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should not have text "Loading..."', async () => {
    const loadingText = await wrapper.queryByText('Loading...');
    expect(loadingText).toBeNull();
  });

  it(`should have 1 number of repo card item(s)`, async () => {
    const listItems = await wrapper.findAllByTestId('repo-item');
    expect(listItems.length).toBe(1);
  });
});
