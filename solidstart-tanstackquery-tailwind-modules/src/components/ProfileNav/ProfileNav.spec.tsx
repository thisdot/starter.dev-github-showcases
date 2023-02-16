import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import ProfileNav from './ProfileNav';

describe('Profile Navigation', () => {
  it('should mount', async () => {
    const wrapper = await render(() => (
      <Router>
        <ProfileNav class="border-none" pathname={'/'} />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });

  it('should find menu item text', async () => {
    const wrapper = await render(() => (
      <Router>
        <ProfileNav class="border-none" pathname={'/'} />
      </Router>
    ));
    const text = await wrapper.getByText('Repositories');
    expect(text).toBeDefined();
  });
});
