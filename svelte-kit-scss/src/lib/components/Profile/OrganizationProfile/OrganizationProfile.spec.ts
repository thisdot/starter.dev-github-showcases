import { beforeEach, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import OrganizationProfile from './OrganizationProfile.svelte';
import { MOCK_GITHUB_ORGANIZATION_PROFILE_INFORMATION } from '$lib/helpers/mocks/users';
import { remapPublicProfileInformation } from '$lib/helpers';

const mockOrgProfile = remapPublicProfileInformation(MOCK_GITHUB_ORGANIZATION_PROFILE_INFORMATION);

describe('OrganizationProfile', () => {
  beforeEach(() => {
    render(OrganizationProfile, {
      profile: mockOrgProfile,
    });
  });

  it.each([
    ['name', mockOrgProfile.name],
    ['bio', mockOrgProfile.bio],
    ['followers', mockOrgProfile.followers],
    ['email', mockOrgProfile.email],
    ['blog', mockOrgProfile.blog],
    ['twitterUsername', mockOrgProfile.twitterUsername],
    ['location', mockOrgProfile.location],
  ])('should render: %s', (testId, expectedValue) => {
    const element = screen.getByTestId(testId);
    const expectedText = String(expectedValue);
    expect(element.innerHTML).toEqual(expectedText);
  });

  it('should render avatar of organization', async () => {
    const image = screen.getByTestId(`avatar`);
    expect(image.getAttribute('src')).toBe(mockOrgProfile.avatarUrl);
  });
});
