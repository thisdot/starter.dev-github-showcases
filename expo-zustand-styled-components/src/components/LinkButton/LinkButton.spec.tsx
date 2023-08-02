import React from 'react';
import { Text, Platform } from 'react-native';
import { render, fireEvent } from '@testing-library/react-native';

import LinkButton from './LinkButton';
import { colors } from '../../utils/style-variables';

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useLinkProps: () => ({ onPress: jest.fn() }),
  };
});

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useState: (initial = false) => [initial, jest.fn()],
}));

describe('LinkButton', () => {
  let screen: any;
  const testProps = {
    to: '/',
    onClick: jest.fn(),
  };

  beforeEach(() => {
    screen = render(
      <LinkButton {...testProps}>
        <Text>Click me!</Text>
      </LinkButton>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const text = screen.getByText('Click me!');
    expect(text).toBeDefined();
  });

  it('calls onClick function when clicked', () => {
    const button = screen.getByText('Click me!');
    fireEvent.press(button);
    expect(testProps.onClick).toHaveBeenCalledTimes(1);
  });

  it('Should not display underline when link is not hover in web view', () => {
    // mock useState
    React.useState = jest.fn(() => [false, jest.fn()]);
    Platform.OS = 'web';
    const web = render(
      <LinkButton testID="web-link" {...testProps} hasLine>
        <Text>Web Click me!</Text>
      </LinkButton>
    );
    const text = web.getByText('Web Click me!');
    expect(text).toBeDefined();
    const parent = web.getByTestId('web-link');
    // @ts-ignore due to text-decoration been a web only style
    expect(parent).toHaveStyle({ textDecoration: 'none' });
  });

  it('Should display underline on hover true in web view', () => {
    // mock useState
    React.useState = jest.fn(() => [true, jest.fn()]);

    // mockUseUseState.mockImplementationOnce(() => [true, jest.fn()]);
    Platform.OS = 'web';
    const web = render(
      <LinkButton testID="web-link" {...testProps} hasLine>
        <Text>Web Click me!</Text>
      </LinkButton>
    );
    const text = web.getByText('Web Click me!');
    expect(text).toBeDefined();
    const parent = web.getByTestId('web-link');
    // @ts-ignore due to text-decoration been a web only style
    expect(parent).toHaveStyle({ textDecoration: `underline ${colors.blue600}` });
  });
});
