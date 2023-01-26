import { Router } from '@solidjs/router';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import { orgData } from './data';
import OrgAbout from './OrgAbout';

describe('Org About', () => {
  let wrapper;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <OrgAbout {...orgData} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show organisation name', async () => {
    const orgName = await wrapper.getByText(orgData.name);
    expect(orgName).toBeVisible();
  });
});
