import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import TopRepos from './TopRepos';
import { repoCardMockedData } from '../RepoCard/data';

describe('Top repos empty state', () => {
  let wrapper: any;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <TopRepos topRepos={[]} login='' />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should have text "No repositories found"', async () => {
    const emptyText = await wrapper.getByText('No repositories found');
    expect(emptyText).toBeDefined();
  });

  it('should not have of repo card item', async () => {
    const listItems = await wrapper.queryByTestId('repo-item');
    expect(listItems).toBeNull();
  });
});

describe('Top repos after loading', () => {
  let wrapper: any;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <TopRepos topRepos={[{ ...repoCardMockedData, id: '23', isPrivate: false }]} login={repoCardMockedData.owner.login} />
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
    // We must add this ts-ignore in orther to avoid to change types in global test configuration. 
    // Vitest doesn't have the right type for this assertion 
    //@ts-ignore
    expect(ele.closest('a')).toHaveAttribute(
      'href',
      `/${repoCardMockedData.owner.login}`
    );
  });
});
