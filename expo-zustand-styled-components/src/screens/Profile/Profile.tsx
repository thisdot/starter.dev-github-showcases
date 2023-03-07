import React from 'react';
import { Text } from 'react-native';

import {
  SafeAreaViewStyled,
  ProfileCardViewStyled,
  ProfileNavViewStyled,
  ProfileSearchViewStyled,
  ProfileRepoViewStyled,
} from './Profile.styles';
import { AppStackScreenProps } from '../../../types';
// import { useAuthStore } from '../../hooks/stores';

const Profile = ({ navigation }: AppStackScreenProps<'Profile'>) => {
  return (
    <SafeAreaViewStyled>
      <ProfileCardViewStyled>
        <Text>Profile Card</Text>
      </ProfileCardViewStyled>
      <ProfileNavViewStyled>
        <Text>Tab Navigation</Text>
      </ProfileNavViewStyled>
      <ProfileSearchViewStyled>
        <Text>Search & Filter Dropdown Buttons</Text>
      </ProfileSearchViewStyled>
      <ProfileRepoViewStyled>
        <Text>Repos</Text>
      </ProfileRepoViewStyled>
    </SafeAreaViewStyled>
  );
};

export default Profile;
