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

  const { name, bio, followers, email, blog, twitterUsername, location, avatarUrl } =
    mockOrgProfile;

  it.each([
    ['name', name],
    ['bio', bio],
    ['blog', blog],
    ['twitterUsername', twitterUsername],
    ['location', location],
  ])('should render: %s', (testId, expectedValue) => {
    const element = screen.getByTestId(testId);
    const expectedText = String(expectedValue);
    expect(element.innerHTML).toEqual(expectedText);
  });

  it('should render email of org correctly', () => {
    const element = screen.getByTestId('email');
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(regexEmail.test(String(element.textContent))).toBeTruthy();
    expect(element.textContent).toEqual(String(email));
  });

  it('should render followers of org correctly', () => {
    const element = screen.getByTestId('followers');
    expect(Number(element.textContent)).toEqual(followers);
  });

  it('should render avatar of organization', () => {
    const image = screen.getByTestId(`avatar`);
    expect(image.getAttribute('src')).toBe(avatarUrl);
  });
});
