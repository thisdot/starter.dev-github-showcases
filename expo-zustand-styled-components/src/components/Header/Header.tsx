import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { StyledHeader, StyledHeaderContainer } from './Header.styles';
import UserDropdown from '../UserDropdown';
import { GitHubLogo } from './GitHubLogo';

import { useAuthStore } from '../../hooks/stores';

const Header = ({
  width,
  navigation,
}: {
  width: number;
  navigation: NativeStackNavigationProp<ParamListBase, string, undefined>;
}) => {
  const { toggleMenu } = useAuthStore();

  return (
    <StyledHeader screenWidth={width}>
      <StyledHeaderContainer screenWidth={width}>
        <TouchableOpacity
          onPress={() => {
            toggleMenu();
            navigation.navigate('Home');
          }}>
          <GitHubLogo />
        </TouchableOpacity>
        <UserDropdown width={width} navigation={navigation} />
      </StyledHeaderContainer>
    </StyledHeader>
  );
};

export default Header;
