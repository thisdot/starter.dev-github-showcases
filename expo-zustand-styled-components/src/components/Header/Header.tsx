import React from 'react';

import { StyledHeader, StyledHeaderContainer } from './Header.styles';
import UserDropdown from '../UserDropdown';
import { GitHubLogo } from '../Icons';

import { useAuthStore } from '../../hooks/stores';
import LinkButton from '../LinkButton/LinkButton';

const Header = ({ width }: { width: number }) => {
  const { toggleMenu } = useAuthStore();

  return (
    <StyledHeader testID="header" screenWidth={width}>
      <StyledHeaderContainer testID="header-container" screenWidth={width}>
        <LinkButton to="/" onClick={() => toggleMenu(false)}>
          <GitHubLogo testID="github-logo" />
        </LinkButton>
        <UserDropdown width={width} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
