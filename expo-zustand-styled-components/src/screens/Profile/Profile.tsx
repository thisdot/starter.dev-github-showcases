import React, { useEffect } from 'react';
import { Text, Platform } from 'react-native';

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

import getUserProfile from '../../services/get-user-profile';

const Profile = () => {
  const { user, error, viewer, isLoading } = useAuthStore();

  useEffect(() => {
    if (viewer?.login) {
      getUserProfile({ username: viewer.login });
    }
  }, [viewer]);

  return (
    <SafeAreaViewStyled>
      {isLoading || error ? (
        <LoaderErrorView error={error} />
      ) : (
        <ContainerStyled>
          {Platform.OS === 'web' && (
            <ProfileNavViewStyled>
              <Text>Web Tab Navigation</Text>
            </ProfileNavViewStyled>
          )}
          <MainContentLayout>
            <UserCard user={user} />
            <ContentLayout>
              {Platform.OS !== 'web' && (
                <ProfileNavViewStyled>
                  <Text>Mobile Tab Navigation</Text>
                </ProfileNavViewStyled>
              )}
              <Repositories username={viewer.login} />
            </ContentLayout>
          </MainContentLayout>
        </ContainerStyled>
      )}
    </SafeAreaViewStyled>
  );
};

export default Profile;
