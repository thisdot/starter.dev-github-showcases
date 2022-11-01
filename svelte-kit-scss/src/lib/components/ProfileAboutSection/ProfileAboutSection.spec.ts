import { beforeEach } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import ProfileAboutSection from './ProfileAboutSection.svelte';
import { userInfoFixture, userOrgs } from '../../fixtures/user';
import {
  mapUserInfoResponseToUserInfo,
  mapUserOrgsApiResponseToUserOrgs,
} from '../../helpers/user';

describe('ProfileAboutSection', () => {
  beforeEach(() => {
    render(ProfileAboutSection, {
      userInfo: mapUserInfoResponseToUserInfo(userInfoFixture),
      userOrgs: mapUserOrgsApiResponseToUserOrgs(userOrgs),
    });
  });

  it("should should render user's name", () => {
    const name = screen.getByText(/This dot/);
    expect(name).toBeTruthy();
  });

  it('should should render username', () => {
    const username = screen.getByText(/^thisdot$/);
    expect(username).toBeTruthy();
  });

  it('should should render follower count', () => {
    const followerCount = screen.getByText(/28/);
    expect(followerCount).toBeTruthy();
  });

  it('should should render following count', () => {
    const followingCount = screen.getByText(/9/);
    expect(followingCount).toBeTruthy();
  });

  it('should should render email', () => {
    const email = screen.getByText(/test@thisdot.co/);
    expect(email).toBeTruthy();
  });

  it('should should render website', () => {
    const website = screen.getByText(/https:\/\/thisdot.co/);
    expect(website).toBeTruthy();
  });

  it('should should render twitter handle', () => {
    const twitterHandle = screen.getByText(/thisdotlabs/);
    expect(twitterHandle).toBeTruthy();
  });

  it('should should render location', () => {
    const location = screen.getByText(/USA/);
    expect(location).toBeTruthy();
  });
});
