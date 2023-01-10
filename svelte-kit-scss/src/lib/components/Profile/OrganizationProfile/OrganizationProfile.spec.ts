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

  it('should render name of org correctly', () => {
    const element = screen.getByTestId('name');
    expect(element.textContent).toEqual(String(name));
  });

  it('should render bio of org correctly', () => {
    const element = screen.getByTestId('bio');
    expect(element.textContent).toEqual(String(bio));
  });

  it('should render blog of org correctly', () => {
    const element = screen.getByTestId('blog');
    expect(element.textContent).toEqual(String(blog));
  });

  it('should render twitterUsername of org correctly', () => {
    const element = screen.getByTestId('twitterUsername');
    expect(element.textContent).toEqual(String(twitterUsername));
  });

  it('should render location of org correctly', () => {
    const element = screen.getByTestId('location');
    expect(element.textContent).toEqual(String(location));
  });

  it('should render email of org correctly', () => {
    if (email) {
      const element = screen.getByTestId('email');
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      expect(regexEmail.test(String(element.textContent))).toBeTruthy();
      expect(element.textContent).toEqual(String(email));
    }
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
