import React from 'react';
import { StyledHeader } from './Header.styles';
import UserDropdown from '../UserDropdown';
import { GitHubLogo } from './GitHubLogo';

const Header = () => {
  return (
    <StyledHeader>
      <GitHubLogo />
      <UserDropdown />
    </StyledHeader>
  );
};

export default Header;
