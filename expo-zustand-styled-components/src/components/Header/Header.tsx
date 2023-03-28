import React from 'react';

import { StyledHeader, StyledHeaderContainer } from './Header.styles';
import UserDropdown from '../UserDropdown';
import { GitHubLogo } from './GitHubLogo';

import { useAuthStore } from '../../hooks/stores';
import LinkButton from '../LinkButton/LinkButton';

const Header = ({ width }: { width: number }) => {
  const { toggleMenu } = useAuthStore();

  return (
    <StyledHeader screenWidth={width}>
      <StyledHeaderContainer screenWidth={width}>
        <LinkButton to="/" onClick={() => toggleMenu(false)}>
          <GitHubLogo />
        </LinkButton>
        <UserDropdown width={width} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
