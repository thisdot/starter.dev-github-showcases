import React from 'react';
import { Text } from 'react-native';
import {
  UserMenu,
  ListItem,
  ArrowImage,
  ProfileImage,
  DropdownWrapper,
  ProfileImageWrapper,
} from './UserDropdown.styles';

import useAuthStore from '../../hooks/stores/useAuthStore';
import LinkButton from '../LinkButton/LinkButton';

const UserDropdown = ({ width }: { width: number }) => {
  const { logout, viewer, isMenuOpen, toggleMenu } = useAuthStore();

  return (
    <DropdownWrapper>
      <ProfileImageWrapper testID="profile-image" onPress={() => toggleMenu()}>
        <ProfileImage source={{ uri: viewer?.avatarUrl || '' }} />
        <ArrowImage source={require('../../../assets/arrow-down-icon.png')} />
      </ProfileImageWrapper>
      {isMenuOpen && (
        <UserMenu screenWidth={width}>
          <ListItem screenWidth={width}>
            <LinkButton to={`/${viewer?.login}`} onClick={() => toggleMenu(false)}>
              <Text>Profile</Text>
            </LinkButton>
          </ListItem>
          <ListItem onPress={() => logout()} screenWidth={width}>
            <Text>Sign Out</Text>
          </ListItem>
        </UserMenu>
      )}
    </DropdownWrapper>
  );
};

export default UserDropdown;
