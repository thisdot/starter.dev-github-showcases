import React from 'react';
import { GitHubLogo } from './GitHubLogo';
import { StyledHeader } from './Header.styles';
import UserDropdown from '../UserDropdown';

const Header = () => {
  return (
    <StyledHeader>
      {/* <Link to="/"> */}
      <GitHubLogo />
      {/* </Link> */}
      <UserDropdown username={'test'} />
      {/* <Link
        to="/login"
      >
        <Text>Sign In</Text>
      </Link> */}
    </StyledHeader >
  );
};

export default Header;
