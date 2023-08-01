import { Router } from '@solidjs/router';
import { fireEvent } from 'solid-testing-library';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import RepoFilter from './RepoFilter';

describe('Repo Meta data', () => {
  let wrapper: any;
  beforeEach(async () => {
    wrapper = await render(() => (
      <Router>
        <RepoFilter languages={['JavaScript']} filteredRepoCount={0} />
      </Router>
    ));
  });

  it('should mount', () => {
    expect(wrapper).toBeTruthy();
  });

  it('should update search state when text is enter', async () => {
    const input = await wrapper.findByTestId('search-input');
    fireEvent.input(input, { target: { value: '23' } });
    await expect(input.value).toBe('23');
  });

  it('should open and close dropdown', async () => {
    const typeDropdown = await wrapper.queryByTestId(
      'filter-dropdown-button-Type'
    );
    fireEvent.click(typeDropdown);
    let dropdownTitle = await wrapper.findByText('Select Type');
    expect(dropdownTitle).toBeTruthy();
    fireEvent.click(document.body);
    dropdownTitle = await wrapper.queryByText('Select Type');
    expect(dropdownTitle).toBeNull();
  });
  const dropdownOptions = ['Type', 'Language', 'Sort'];
  const dropDownBtn = [
    [`filter-dropdown-button-${dropdownOptions[0]}`, dropdownOptions[0]],
    [`filter-dropdown-button-${dropdownOptions[1]}`, dropdownOptions[1]],
    [`filter-dropdown-button-${dropdownOptions[2]}`, dropdownOptions[2]],
  ];

  it.each(dropDownBtn)(
    'should find all drop down button and fire click event on each to display it content',
    async (accessor, expectation) => {
      const btn = await wrapper.queryByTestId(accessor);
      await fireEvent.click(btn);
      const dropdownTitle = await wrapper.findByText(`Select ${expectation}`);
      expect(dropdownTitle).toBeTruthy();
    }
  );
});
