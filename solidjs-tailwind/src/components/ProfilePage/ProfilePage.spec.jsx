import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import { userProfileProps } from '../UserProfile/data';
import ProfilePage from './ProfilePage';

describe('Profile Page', () => {
  let wrapper;
  const data = {
    user: {
      ...userProfileProps,
      organizations: {
        nodes: userProfileProps.organizations,
      },
    },
    reposInfo: {
      repos: [],
    },
  };

  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <ProfilePage {...data} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show user profile info', async () => {
    const userProfile = await wrapper.getByTestId('user-profile');
    expect(userProfile.innerHTML).toBeTruthy();
  });
});
