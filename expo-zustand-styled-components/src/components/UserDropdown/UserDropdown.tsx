import React, { useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
  UserMenu,
  ListItem,
  ArrowImage,
  ProfileImage,
  DropdownWrapper,
  ProfileImageWrapper,
} from './UserDropdown.styles';

import useAuthStore from '../../hooks/stores/useAuthStore';

const UserDropdown = ({
  navigation,
}: {
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}) => {
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
            <TouchableOpacity
              onPress={() => {
                toggleDropdown();
                navigation.navigate('Profile');
              }}>
              <Text>Profile</Text>
            </TouchableOpacity>
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
