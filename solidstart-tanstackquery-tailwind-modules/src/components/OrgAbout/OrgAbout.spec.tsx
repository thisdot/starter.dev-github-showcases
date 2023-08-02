import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import { orgData } from './data';
import OrgAbout from './OrgAbout';

describe('Org About', () => {
  it('should mount', async () => {
    const wrapper = await render(() => (
      <Router>
        <OrgAbout {...orgData} />
      </Router>
    ));
    expect(wrapper).toBeTruthy();
  });

  it('should show organisation name', async () => {
    const wrapper = await render(() => (
      <Router>
        <OrgAbout {...orgData} />
      </Router>
    ));
    const orgName = await wrapper.getByText(orgData.name);
    expect(orgName).toBeVisible();
  });
});
