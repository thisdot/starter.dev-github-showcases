import React from 'react';
import { AppStackScreenProps } from '../../../types';
import { Text, View } from 'react-native';
import { SafeAreaViewStyled } from './Profile.styles';

const Profile = ({ navigation }: AppStackScreenProps<'Profile'>) => {
  return (
    <SafeAreaViewStyled>
      <View><Text>Hello this is profile screen</Text></View>
    </SafeAreaViewStyled>
  );
};

export default Profile;
