import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import FilterDropdown from './FilterDropdown';

describe('FilterDropdown', () => {
  const items = ['item1', 'item2', 'item3'];
  const itemsColors = ['aaa', 'bbb', 'ccc'];
  const selected = 'item1';
  const name = 'dropdownName';
  const selectOption = jest.fn();
  const setShowOptions = jest.fn();

  test('renders filter dropdown with correct name', () => {
    const { getByText } = render(
      <FilterDropdown
        name={name}
        items={items}
        itemsColors={itemsColors}
        selected={selected}
        selectOption={selectOption}
        setShowOptions={setShowOptions}
      />
    );

    expect(getByText(name)).toBeTruthy();
  });

  test('selects an option from the dropdown', () => {
    const { getByText } = render(
      <FilterDropdown
        name={name}
        items={items}
        itemsColors={itemsColors}
        selected={selected}
        showOptions={name}
        selectOption={selectOption}
        setShowOptions={setShowOptions}
      />
    );

    const dropdownButton = getByText(name);
    fireEvent.press(dropdownButton);

    const option = getByText('item1');
    fireEvent.press(option);

    expect(selectOption).toHaveBeenCalledWith('item1');
  });
});
