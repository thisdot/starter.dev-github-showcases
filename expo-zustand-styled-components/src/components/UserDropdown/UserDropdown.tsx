import React from 'react';
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
  width,
  navigation,
}: {
  width: number;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}) => {
  const { logout, viewer, isMenuOpen, toggleMenu } = useAuthStore();

  return (
    <DropdownWrapper>
      <ProfileImageWrapper testID="profile-image" onPress={() => useAuthStore.setState({isMenuOpen: !isMenuOpen})}>
        <ProfileImage source={{ uri: viewer?.avatarUrl || '' }} />
        <ArrowImage source={require('../../../assets/arrow-down-icon.png')} />
      </ProfileImageWrapper>
      {isMenuOpen && (
        <UserMenu screenWidth={width}>
          <ListItem screenWidth={width}>
            <TouchableOpacity
              onPress={() => {
                toggleMenu(false);
                navigation.navigate('Profile');
              }}>
              <Text>Profile</Text>
            </TouchableOpacity>
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
