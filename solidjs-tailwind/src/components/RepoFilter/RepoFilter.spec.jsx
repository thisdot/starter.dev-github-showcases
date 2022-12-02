import { Router } from '@solidjs/router';
import { fireEvent } from 'solid-testing-library';
import { render } from 'solid-testing-library';
import { beforeEach, describe, expect, it } from 'vitest';
import RepoFilter from './RepoFilter';
import { search } from './RepoFilter.store';

describe('Repo Meta data', () => {
  let wrapper;
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
    fireEvent.keyUp(input, {target: {value: '23'}})
    expect(input.value).toBe(search())
  });

  it('should open and close dropdown', async () => {
    const eles = await wrapper.queryAllByTestId('filter-dropdown-button');
    fireEvent.click(eles[0]);
    let typographyEl = await wrapper.findByText('Select Type');
    expect(typographyEl).toBeInTheDocument();
    fireEvent.click(document.body);
    typographyEl = await wrapper.queryByText('Select Type');
    expect(typographyEl).toBeNull();
  });

  it('should find all drop down button and fire click event on each to display it content', async () => {
    const types = ['Type', 'Language', 'Sort'];
    const eles = await wrapper.queryAllByTestId('filter-dropdown-button');
    eles.forEach(async (ele, i) => {
        await fireEvent.click(ele);
        const typographyEl = await wrapper.findByText(`Select ${types[i]}`);
        expect(typographyEl).toBeInTheDocument();
    });
  });

});
