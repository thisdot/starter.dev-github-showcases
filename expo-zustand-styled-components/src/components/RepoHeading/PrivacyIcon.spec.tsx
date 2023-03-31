import React from 'react';
import { render } from '@testing-library/react-native';
import PrivacyIcon from './PrivacyIcon';

describe('PrivacyIcon component', () => {
  it('renders without errors', () => {
    render(<PrivacyIcon visibility="private" />);
  });

  it('renders PadlockIcon for private visibility', () => {
    const { getByTestId } = render(<PrivacyIcon visibility="private" />);
    const padlockIcon = getByTestId('padlock-icon');
    expect(padlockIcon).toBeDefined();
  });

  it('renders RepoIcon for public visibility', () => {
    const { getByTestId } = render(<PrivacyIcon visibility="public" />);
    const repoIcon = getByTestId('repo-icon');
    expect(repoIcon).toBeDefined();
  });

  it('renders IconPlaceholder for falsy visibility prop', () => {
    const { getByTestId } = render(<PrivacyIcon visibility={null} />);
    const iconPlaceholder = getByTestId('icon-placeholder');
    expect(iconPlaceholder).toBeDefined();
  });
});
