import { it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
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

  it.each(members)(`should render member %#`, ({ href, avatarUrl, login }) => {
    const image = screen.getByAltText(login) as HTMLImageElement;
    expect(image.getAttribute('src')).toBe(avatarUrl);
    expect(image.closest('a')?.href).toBe(window.location.origin + href);
  });
});
