import React from 'react';
import { GitHubLogo } from './GitHubLogo';
import { StyledHeader } from './Header.styles';
import UserDropdown from '../UserDropdown';

const Header = () => {
  return (
    <StyledHeader>
      <GitHubLogo />
      <UserDropdown image={'https://reactjs.org/logo-og.png'} />
    </StyledHeader>
  );
};

export default Header;
