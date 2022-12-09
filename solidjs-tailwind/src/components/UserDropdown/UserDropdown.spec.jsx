import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import UserDropdown from './UserDropdown';

describe('User dropdown', () => {
  let wrapper;
  const data = {
    username: 'hdjerry',
    image: 'https://avatars.githubusercontent.com/u/22839396?v=4',
  };
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <UserDropdown {...data} />
      </Router>
    ))
  })

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show avatar', async () => {
    const avatar = await wrapper.getByAltText('Profile Photo');
    expect(avatar).toBeVisible()
  })

  it('should show dropdown options', async () => {
    const option = await wrapper.getByText('Profile');
    expect(option).toBeVisible()
  })
})
