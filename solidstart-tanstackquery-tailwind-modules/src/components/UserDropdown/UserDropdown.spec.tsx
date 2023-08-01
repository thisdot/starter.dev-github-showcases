import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import UserDropdown from './UserDropdown';

describe('User dropdown', () => {
  const data = {
    username: 'hdjerry',
    image: 'https://avatars.githubusercontent.com/u/22839396?v=4',
  };

  it('should mount', () => {
    const wrapper = render(() => (
      <Router>
        <UserDropdown {...data} />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });

  it('should show avatar', () => {
    const wrapper = render(() => (
      <Router>
        <UserDropdown {...data} />
      </Router>
    ));
    const avatar = wrapper.getByAltText('Profile Photo');
    expect(avatar).toBeVisible();
  });

  it('should show dropdown options', async () => {
    const wrapper = render(() => (
      <Router>
        <UserDropdown {...data} />
      </Router>
    ));
    const option = wrapper.getByText('Profile');
    expect(option).toBeVisible();
  });
});
