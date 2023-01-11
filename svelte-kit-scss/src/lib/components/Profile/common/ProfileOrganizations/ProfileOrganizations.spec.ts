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

  let currentTestIndex = 0;
  it.each(organizations)(
    `should render organization ${currentTestIndex}`,
    ({ login, avatarUrl }) => {
      const { container } = profileOrganizationsTree();
      const links = container.getElementsByClassName(
        'organization-link'
      ) as HTMLCollectionOf<HTMLAnchorElement>;
      const images = container.getElementsByClassName(
        'image'
      ) as HTMLCollectionOf<HTMLImageElement>;

      expect(links[currentTestIndex].getAttribute('href')).toBe(`/${login}`);
      expect(images[currentTestIndex].getAttribute('src')).toBe(avatarUrl);
      currentTestIndex += 1;
    }
  );
});
