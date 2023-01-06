import { beforeEach, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import UserProfile from './UserProfile.svelte';
import { remapPublicProfileInformation, remapOrganizationSimple } from '$lib/helpers';
import { MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION } from '$lib/helpers/mocks/users';
import { MOCK_ORGANIZATION_SIMPLE_ARRAY } from '$lib/helpers/mocks/organizations';

const mockUserProfile = remapPublicProfileInformation(MOCK_GITHUB_PUBLIC_PROFILE_INFORMATION);
const mockOrganizations = MOCK_ORGANIZATION_SIMPLE_ARRAY.map(remapOrganizationSimple);

describe('UserProfile', () => {
  beforeEach(() => {
    render(UserProfile, {
      profile: mockUserProfile,
      organizations: mockOrganizations,
    });
  });

  it.each([
    ['name', mockUserProfile.name],
    ['login', mockUserProfile.login],
    ['bio', mockUserProfile.bio],
    ['followers', mockUserProfile.followers],
    ['following', mockUserProfile.following],
    ['email', mockUserProfile.email],
    ['blog', mockUserProfile.blog],
    ['twitterUsername', mockUserProfile.twitterUsername],
    ['location', mockUserProfile.location],
  ])('should render: %s', (testId, expectedValue) => {
    const element = screen.getByTestId(testId);
    const expectedText = String(expectedValue);
    expect(element.innerHTML).toEqual(expectedText);
  });
});
