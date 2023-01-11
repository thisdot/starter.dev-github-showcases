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
    nodeId: 'MDEasdfJadsfYUYKjUkasdlmnHJS12Y',
    url: 'https://api.github.com/orgs/github',
  },
];

describe('ProfileOrganizations', () => {
  function profileOrganizationsTree() {
    return render(ProfileOrganizations, {
      organizations,
    });
  }

  beforeEach(() => {
    profileOrganizationsTree();
  });

  it.each(organizations)(`should render member %#`, ({ avatarUrl, login }) => {
    const image = screen.getByAltText(login) as HTMLImageElement;
    expect(image.getAttribute('src')).toBe(avatarUrl);
    expect(image.closest('a')?.href).toBe(`${window.location.origin}/${login}`);
  });
});
