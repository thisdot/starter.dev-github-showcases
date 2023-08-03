import { MOCK_REPOSITORY_STATE } from '$lib/helpers/mocks/repository';
import { render, screen } from '@testing-library/svelte';
import VisibilityLabel from './VisibilityLabel.svelte';

describe('VisibilityLabel Component', () => {
  const { visibility } = MOCK_REPOSITORY_STATE;
  it('should render breadcrumb accurately', () => {
    render(VisibilityLabel, {
      visibility,
    });

    const element = screen.getByTestId('visibility');
    const expectedText = String(visibility);
    expect(element.textContent).toEqual(expectedText);
  });
});
