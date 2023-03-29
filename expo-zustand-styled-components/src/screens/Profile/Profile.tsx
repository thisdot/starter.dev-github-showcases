import React, { useEffect } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import {
  ContentLayout,
  ContainerStyled,
  MainContentLayout,
  SafeAreaViewStyled,
  ProfileNavViewStyled,
} from './Profile.styles';

import UserCard from '../../components/Profile/UserCard';
import LoaderErrorView from '../../components/LoaderErrorView';
import Repositories from '../../components/Profile/Repositories';

import { useAuthStore } from '../../hooks/stores';
import { breakpoints } from '../../utils/breakpoints';

import getUserProfile from '../../services/get-user-profile';
import { AppStackScreenProps } from '../../../types';

const Profile = ({ route }: AppStackScreenProps<'Profile'>) => {
  const { width } = useWindowDimensions();

  const { user, error, isLoading } = useAuthStore();

  useEffect(() => {
    getUserProfile({ username: route.params.username });
  }, [route.params.username]);

  return (
    <SafeAreaViewStyled>
      <ContainerStyled>
        {width >= breakpoints.tablet && (
          <ProfileNavViewStyled>
            <Text>Web Tab Navigation</Text>
          </ProfileNavViewStyled>
        )}
        <MainContentLayout screenWidth={width}>
          {isLoading || error || !user ? (
            <LoaderErrorView
              error={error}
              style={{ width: width >= breakpoints.tablet ? 300 : undefined }}
            />
          ) : (
            <UserCard user={user} />
          )}
          <ContentLayout screenWidth={width}>
            {width < breakpoints.tablet && (
              <ProfileNavViewStyled>
                <Text>Mobile Tab Navigation</Text>
              </ProfileNavViewStyled>
            )}
            <Repositories {...route.params} />
          </ContentLayout>
        </MainContentLayout>
      </ContainerStyled>
    </SafeAreaViewStyled>
  );
};

export default Profile;
