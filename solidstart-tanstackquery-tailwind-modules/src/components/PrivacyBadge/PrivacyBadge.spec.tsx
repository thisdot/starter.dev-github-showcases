import { render } from 'solid-testing-library';
import { describe, expect, it } from 'vitest';
import PrivacyBadge from './PrivacyBadge';

describe('Privacy Badge', () => {
  const visibility = 'PUBLIC';

  it('should mount', async () => {
    const wrapper = await render(() => (
      <PrivacyBadge visibility={visibility} />
    ));
    expect(wrapper).toBeTruthy();
  });

  it('should show the visibility status of the bagde', async () => {
    const wrapper = await render(() => (
      <PrivacyBadge visibility={visibility} />
    ));
    const status = await wrapper.getByText(visibility);
    expect(status).toBeDefined();
  });
});
