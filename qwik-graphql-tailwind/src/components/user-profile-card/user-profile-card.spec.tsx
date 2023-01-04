import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it } from 'vitest';
import { User } from '~/utils/types';
import { UserProfileCard } from './user-profile-card';

const user: User = {
  avatarUrl: 'https://avatars0.githubusercontent.com/u/12345678?v=4',
  bio: 'This is my bio',
  company: 'My company',
  location: 'My location',
  login: 'my-username',
  name: 'My Name',
  twitterUsername: 'my-twitter-username',
  websiteUrl: 'my-website.com',
  followers: {
    totalCount: 100,
  },
  repositories: [],
  following: {
    totalCount: 50,
  },
  starredRepositories: {
    totalCount: 25,
  },
  organizations: {
    nodes: [
      {
        login: 'org1',
        avatarUrl: 'https://avatars1.githubusercontent.com/u/12345678?v=4',
      },
      {
        login: 'org2',
        avatarUrl: 'https://avatars2.githubusercontent.com/u/12345678?v=4',
      },
    ],
  },
};

describe('UserProfileCard component', () => {
  it('should mount', async () => {
    const { render } = await createDOM();
    await render(<UserProfileCard {...user} />);
  });

  it('should show the info of the user', async () => {
    const { screen, render } = await createDOM();
    await render(<UserProfileCard {...user} />);

    console.log(screen.outerHTML);

    expect(screen.outerHTML).toContain(user.name);
    expect(screen.outerHTML).toContain(user.bio);
  });
});
