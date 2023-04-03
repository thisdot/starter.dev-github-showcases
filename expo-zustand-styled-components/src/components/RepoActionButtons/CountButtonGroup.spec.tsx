import React from 'react';
import { render, screen } from '@testing-library/react-native';
import CountButtonGroup from './CountButtonGroup';
import { Text } from 'react-native';

describe('CountButtonGroup', () => {
  it('should render the count number as "0" if no count prop is passed', () => {
    render(<CountButtonGroup><Text>Test</Text></CountButtonGroup>);
    const countText = screen.getByText('0');
    const countChild = screen.getByText('Test');
    expect(countChild).toBeDefined();
    expect(countText).toBeDefined();
  });

  it('should format the count number to "1k" if count prop is greater than 1000', () => {
    render(<CountButtonGroup count={2000}><Text>Test</Text></CountButtonGroup>);
    const countText = screen.getByText('2k');
    expect(countText).toBeDefined();
  });
});
