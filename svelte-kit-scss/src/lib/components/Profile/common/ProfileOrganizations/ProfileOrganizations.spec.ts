import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProfileOrganizations from './ProfileOrganizations.svelte';

const organizations = [
  {
    avatarUrl: 'https://avatars.githubusercontent.com/u/22839396?v=4',
    description: '',
    id: 22839396,
    login: 'thisdot',
    nodeId: 'MDEyOk9yZ2FuaXphdGlvbjIyODM5Mzk2',
    url: 'https://api.github.com/orgs/thisdot',
  },
  {
    avatarUrl: 'https://github.com/images/error/octocat_happy.gif',
    description: '',
    id: 1,
    login: 'github',
    nodeId: 1,
    url: 'https://api.github.com/orgs/github',
  },
];

describe('ProfileOrganizations', () => {
  describe('should render items', () => {
    render(ProfileOrganizations, {
      organizations,
    });

    it('should render repository items', () => {
      const links = screen.getAllByRole('link');
      const images = screen.getAllByRole('img');

      organizations.map((org, i) => {
        expect(links[i].getAttribute('href')).toBe(`/${org.login}`);
        expect(images[i].getAttribute('src')).toBe(org.avatarUrl);
      });
    });
  });
});
