import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import ProfileNav from './ProfileNav';

describe('RepoCard for profilepage', () => {
  it('should mount', async () => {
    const wrapper = await render(() => (
      <Router>
        <ProfileNav class="border-none" pathname={'/'} />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });
});
