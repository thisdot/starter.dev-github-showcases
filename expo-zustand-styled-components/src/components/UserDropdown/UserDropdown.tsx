import React, { useState } from 'react';
import { Text } from 'react-native';
import {
  DropdownWrapper,
  ProfileImage,
  UserMenu,
  ListItem,
  ArrowImage,
  ProfileImageWrapper,
} from './UserDropdown.styles';
import { Link } from '@react-navigation/native';
import useAuthStore from '../../hooks/stores/useAuthStore';

const UserDropdown = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const toggleDropdown = () => setOpenDropdown(!openDropdown);
  const { logout, viewer } = useAuthStore();

  return (
    <DropdownWrapper>
      <ProfileImageWrapper testID="profile-image" onPress={() => toggleDropdown()}>
        <ProfileImage source={{ uri: viewer?.avatarUrl || '' }} />
        <ArrowImage source={require('../../../assets/arrow-down-icon.png')} />
      </ProfileImageWrapper>
      {openDropdown && (
        <UserMenu>
          <ListItem>
            <Link to="/profile">
              <Text>Profile</Text>
            </Link>
          </ListItem>
          <ListItem onPress={() => logout()}>
            <Text>Sign Out</Text>
          </ListItem>
        </UserMenu>
      )}
    </DropdownWrapper>
  );
};

export default UserDropdown;
