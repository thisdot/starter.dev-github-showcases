import { it, expect } from 'vitest';
import { render } from '@testing-library/svelte';
import OrganizationMembers from './OrganizationMembers.svelte';
import { MOCK_GITHUB_ORGANIZATION_MEMBERS } from '$lib/helpers/mocks/users';

const members = MOCK_GITHUB_ORGANIZATION_MEMBERS;

describe('OrganizationMembers', () => {
  function organizationMembersTree() {
    return render(OrganizationMembers, {
      members,
    });
  }

  beforeEach(() => {
    organizationMembersTree();
  });

  let currentTestIndex = 0;
  it.each(members)(`should render member ${currentTestIndex}`, ({ href, avatarUrl }) => {
    const { container } = organizationMembersTree();
    const links = container.getElementsByClassName(
      'member-link'
    ) as HTMLCollectionOf<HTMLAnchorElement>;
    const images = container.getElementsByClassName('image') as HTMLCollectionOf<HTMLImageElement>;

    expect(links[currentTestIndex].getAttribute('href')).toBe(href);
    expect(images[currentTestIndex].getAttribute('src')).toBe(avatarUrl);
    currentTestIndex += 1;
  });
});
