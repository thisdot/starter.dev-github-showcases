import React from 'react';
import { fireEvent, render, act } from '@testing-library/react-native';
import Header from './Header';
import { useAppStore } from '../../hooks/stores';

// Mock the useAppStore hook
jest.mock('../../hooks/stores', () => ({
  useAppStore: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useLinkProps: () => ({ onPress: jest.fn() }),
  };
});

describe('Header', () => {
  const mockUseAppStore = useAppStore as jest.MockedFunction<typeof useAppStore>;

  beforeEach(() => {
    mockUseAppStore.mockReturnValue({ toggleMenu: jest.fn() });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', () => {
    render(<Header width={100} />);
  });

  it('clicking the GitHub logo calls the toggleMenu function with false', async () => {
    const { getByTestId } = render(<Header width={100} />);

    await act(async () => {
      const logo = getByTestId('github-logo');
      fireEvent.press(logo);
      expect(mockUseAppStore().toggleMenu).toHaveBeenCalled();
    });
  });

  it('renders the UserDropdown component', () => {
    const { getByTestId } = render(<Header width={100} />);
    const userDropdown = getByTestId('user-dropdown');

    expect(userDropdown).toBeDefined();
  });

  it('applies the screenWidth prop to the StyledHeader and StyledHeaderContainer styles', () => {
    const { getByTestId } = render(<Header width={200} />);
    const header = getByTestId('header');
    const headerContainer = getByTestId('header-container');

    expect(header.props.screenWidth).toBe(200);
    expect(headerContainer.props.screenWidth).toBe(200);
  });
});
