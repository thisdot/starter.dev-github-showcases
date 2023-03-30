import { useEffect, useState, useLayoutEffect } from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';

import { MainContentLayout, SafeAreaViewStyled, ProfileNavViewStyled } from './Profile.styles';

import UserCard from '../../components/Profile/UserCard';
import TabNavigation from '../../components/TabNavigation';
import LoaderErrorView from '../../components/LoaderErrorView';
import Repositories from '../../components/Profile/Repositories';

import { tabs } from '../../utils/constants';
import { useAuthStore } from '../../hooks/stores';
import { breakpoints } from '../../utils/breakpoints';
import getUserProfile from '../../services/get-user-profile';

import { AppStackScreenProps } from '../../../types';
import { Platform } from 'react-native';

const Profile = ({ route, navigation }: AppStackScreenProps<'Profile'>) => {
  const [leftPadding, setLeftPadding] = useState(0);
  const { width, height } = useWindowDimensions();
  const { user, error, isLoading } = useAuthStore();

  useEffect(() => {
    getUserProfile({ username: route.params.username });
  }, [route.params.username]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Profile . ${route.params.username}` });
  }, [navigation, route.params]);

  useEffect(() => {
    if (Platform.OS === 'web') {
      document.querySelectorAll('[class*=css-view-]').forEach((e) => {
        // we want to skip elements that have a z-index class
        if (!/r-zIndex-/.test(e.className)) {
          // check if element has a direct child of type 'img'
          if (!e.querySelectorAll(':scope > img')?.length) {
            // if yes, unset the z-index. This is to prevent the image from
            // being hidden behind the header when the user scrolls up
            // @ts-ignore
            e.style.zIndex = 'unset';
          }
        }
      });
    }
  }, []);

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !user ? (
        <LoaderErrorView error={error} style={{ flex: 1, height: height - 100 }} />
      ) : (
        <ScrollView
          stickyHeaderIndices={width >= breakpoints.tablet ? [0] : undefined}
          contentContainerStyle={{ flexGrow: 1 }}>
          {width >= breakpoints.tablet && (
            <ProfileNavViewStyled isWeb>
              <TabNavigation pl={leftPadding} tabs={tabs} activeTab={tabs[0].title} />
            </ProfileNavViewStyled>
          )}
          <MainContentLayout screenWidth={width}>
            <UserCard user={user} />
            {width < breakpoints.tablet && (
              <ProfileNavViewStyled>
                <TabNavigation pl={16} tabs={tabs} activeTab={tabs[0].title} />
              </ProfileNavViewStyled>
            )}
            <Repositories {...route.params} setLeftPadding={setLeftPadding} />
          </MainContentLayout>
        </ScrollView>
      )}
    </SafeAreaViewStyled>
  );
};

export default Profile;
