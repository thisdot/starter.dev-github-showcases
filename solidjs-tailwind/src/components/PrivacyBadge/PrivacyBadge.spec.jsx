import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import PrivacyBadge from './PrivacyBadge';

describe('Privacy Badge', () => {
  let wrapper;
  const visibility = 'PUBLIC'
  beforeEach(async () => {
    wrapper = await render(() => (
        <PrivacyBadge visibility={visibility} />
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should show the visibility status of the bagde', async () => {
    const status = await wrapper.getByText(visibility);
    expect(status).toBeVisible();
  });
});
