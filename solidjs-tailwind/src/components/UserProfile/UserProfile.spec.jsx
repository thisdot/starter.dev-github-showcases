import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import UserProfile from './UserProfile.jsx';
import { userProfileProps } from './data';

describe('User profile card', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <UserProfile {...userProfileProps} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show the user display name', async () => {
    const fullName = await wrapper.getByText(userProfileProps.name);
    expect(fullName).toBeVisible();
  });

  it('should have a link for user profile picture', async () => {
    const avatar = await wrapper.getByAltText('Avatar');
    expect(avatar).toBeVisible();
  });
});
