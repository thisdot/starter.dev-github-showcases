import React, { useEffect } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import {
  ContentLayout,
  ContainerStyled,
  MainContentLayout,
  SafeAreaViewStyled,
  ProfileNavViewStyled,
} from './Profile.styles';

import { breakpoints } from '../../utils/breakpoints';

import UserCard from '../../components/Profile/UserCard';
import LoaderErrorView from '../../components/LoaderErrorView';
import Repositories from '../../components/Profile/Repositories';

import { useAuthStore } from '../../hooks/stores';

import getUserProfile from '../../services/get-user-profile';

const Profile = () => {
  const { width } = useWindowDimensions();

  const { user, error, viewer, isLoading } = useAuthStore();

  useEffect(() => {
    getUserProfile({ username: viewer.login });
  }, [viewer]);

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
            <Repositories username={viewer.login} />
          </ContentLayout>
        </MainContentLayout>
      </ContainerStyled>
    </SafeAreaViewStyled>
  );
};

export default Profile;
