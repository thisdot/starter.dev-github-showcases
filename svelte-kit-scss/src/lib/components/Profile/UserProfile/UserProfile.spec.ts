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

  const { name, bio, followers, email, blog, twitterUsername, location, avatarUrl, following } =
    mockUserProfile;

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

  it('should render following of org correctly', () => {
    const element = screen.getByTestId('following');
    expect(Number(element.textContent)).toEqual(following);
  });

  it('should render avatar of user', async () => {
    const image = screen.getByTestId(`avatar`);
    expect(image.getAttribute('src')).toBe(avatarUrl);
  });
});
