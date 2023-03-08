import React from 'react';
import { StyledHeader, StyledHeaderContainer } from './Header.styles';
import UserDropdown from '../UserDropdown';
import { GitHubLogo } from './GitHubLogo';

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderContainer>
        <GitHubLogo />
        <UserDropdown />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
