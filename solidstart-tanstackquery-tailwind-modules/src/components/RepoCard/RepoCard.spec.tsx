import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import RepoCard from './RepoCard';
import { repoCardMockedData } from './data';

describe('RepoCard for profilepage', () => {
  it('should mount', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoCard {...repoCardMockedData} />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });

  it('a tag text should contain only name', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoCard {...repoCardMockedData} />
      </Router>
    ));
    const repoName = await wrapper.getByText(repoCardMockedData.name);
    expect(repoName).toBeDefined();
  });
});

describe('RepoCard for non profile page', () => {
  const profileData = {
    ...repoCardMockedData,
    isProfilePage: false,
  };

  it('should mount', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoCard {...profileData} />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });

  it('a tag text should contain owner/name', async () => {
    const wrapper = await render(() => (
      <Router>
        <RepoCard {...profileData} />
      </Router>
    ));

    const repowithOwner = await wrapper.getByText(
      `${profileData.owner.login}/${profileData.name}`
    );
    expect(repowithOwner).toBeDefined();
  });
});
