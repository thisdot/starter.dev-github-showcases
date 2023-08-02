import { createDOM } from '@builder.io/qwik/testing';
import { describe, expect, it, test } from 'vitest';
import { FilterDropdown } from './filter-dropdown';

describe('Filter Dropdown', async () => {
  test('should mount', async () => {
    const { render } = await createDOM();
    await render(<FilterDropdown name={'Filter Dropdown'} />);
  });

  it('should open and close dropdown', async () => {
    const { screen, render, userEvent } = await createDOM();
    await render(<FilterDropdown name={'Filter Dropdown'} description={'Filter by label'} />);

    expect(screen.outerHTML).toContain('Filter Dropdown');

    const spanBefore = screen.querySelector('button') as any as HTMLDivElement;
    // eslint-disable-next-line qwik/no-use-after-await
    await userEvent(spanBefore, 'click');
    expect(screen.outerHTML).toContain('Filter by label');
  });
});
