import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import RepoCard from './RepoCard';
import { repoCardProps } from './data';

describe('RepoCard for profilepage', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <RepoCard {...repoCardProps} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('a tag text should contain only name', async () => {
    const repoName = await wrapper.getByText(repoCardProps.name);
    expect(repoName).toBeVisible();
  });
});
describe('RepoCard for non profile page', () => {
  let wrapper;
  const profileData = {
    ...repoCardProps,
    isProfilePage: true,
  };

  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <RepoCard {...profileData} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('a tag text should contain owner/name', async () => {
    const repowithOwner = await wrapper.getByText(
      `${profileData.owner.login}/${profileData.name}`
    );
    expect(repowithOwner).toBeVisible();
  });
});
