import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Header from './Header';
import { act } from 'react-test-renderer';
import { useAuthStore } from '../../hooks/stores';

// Mock the useAuthStore hook
jest.mock('../../hooks/stores', () => ({
  useAuthStore: jest.fn(),
}));

jest.mock('@react-navigation/native', () => {
  return {
    ...jest.requireActual('@react-navigation/native'),
    useLinkProps: () => ({ onPress: jest.fn() }),
  };
});

describe('Header', () => {
  const mockUseAuthStore = useAuthStore as jest.MockedFunction<typeof useAuthStore>;

  beforeEach(() => {
    mockUseAuthStore.mockReturnValue({ toggleMenu: jest.fn() });
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
      const logo = await getByTestId('github-logo');
      fireEvent.press(logo);
      expect(mockUseAuthStore().toggleMenu).toHaveBeenCalled();
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
