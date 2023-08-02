import { MOCK_BREADCRUMBS } from '$lib/helpers/mocks/repository';
import { render } from '@testing-library/svelte';
import Breadcrumbs from './Breadcrumbs.svelte';

describe('Breadcrumbs Component', () => {
  it('should render breadcrumb accurately', () => {
    const { container } = render(Breadcrumbs, {
      breadcrumbs: MOCK_BREADCRUMBS,
    });

    const breadcrumbs = container.getElementsByClassName('breadcrumbs')[0];
    expect(breadcrumbs.textContent).toEqual(
      `${MOCK_BREADCRUMBS[0].name} /${MOCK_BREADCRUMBS[1].name} `
    );
  });
});
