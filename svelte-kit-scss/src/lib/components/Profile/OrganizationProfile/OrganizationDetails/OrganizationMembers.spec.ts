import { it, expect } from 'vitest';
import { getByRole, render, screen } from '@testing-library/svelte';
import OrganizationMembers from './OrganizationMembers.svelte';
import { MOCK_GITHUB_ORGANIZATION_MEMBERS } from '$lib/helpers/mocks/users';

const mockOrgMembers = MOCK_GITHUB_ORGANIZATION_MEMBERS;

describe('OrganizationMembers', () => {
  it('should render organization members', () => {
    render(OrganizationMembers, {
      members: mockOrgMembers,
    });

    const links = screen.getAllByRole('link');
    const images = screen.getAllByRole('img');

    mockOrgMembers.map((member, i) => {
      expect(links[i].getAttribute('href')).toBe(member.href);
      expect(images[i].getAttribute('src')).toBe(member.avatarUrl);
    });
  });
});
