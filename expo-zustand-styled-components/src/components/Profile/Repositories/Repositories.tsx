import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, FlatList, Platform, ScrollView, useWindowDimensions } from 'react-native';

import getUserRepos from '../../../services/get-user-repos';
import { useUserReposStore, useRepoFilterStore } from '../../../hooks/stores';

import RepoCard from '../../RepoCard';
import Pagination from '../../Pagination';
import RepoFilter from '../../RepoFilter';
import LoaderErrorView from '../../LoaderErrorView';

import useRepoSortFilter from '../../../utils/useRepoSortFiler';

import { ContainerStyled } from './Repositories.styles';

const Repositories = ({
  username,
  afterCursor,
  beforeCursor,
  setLeftPadding,
}: {
  username: string;
  afterCursor?: string;
  beforeCursor?: string;
  setLeftPadding: (left: number) => void;
}) => {
  const { navigate } = useNavigation();
  const { width } = useWindowDimensions();
  const { error, pageInfo, userRepos, isLoading } = useUserReposStore();
  const { search, filterType, sortBy, language } = useRepoFilterStore();
  const { result, languages } = useRepoSortFilter(userRepos, search, filterType, sortBy, language);

  useEffect(() => {
    getUserRepos({
      username,
      first: 10,
      afterCursor,
      beforeCursor,
      orderBy: { direction: 'DESC', field: 'UPDATED_AT' },
    });
  }, [username, afterCursor, beforeCursor]);

  useEffect(() => {
    useRepoSortFilter(userRepos, search, filterType, sortBy, language);
  }, [search, userRepos, filterType]);

  const onLayout = (e) => setLeftPadding(e.nativeEvent.layout?.left || 300);
  const goToNext = () => {
    navigate('AppNavigator', {
      screen: 'Profile',
      params: { username, afterCursor: pageInfo?.endCursor },
    });
  };
  const goToPrev = () => {
    navigate('AppNavigator', {
      screen: 'Profile',
      params: { username, beforeCursor: pageInfo?.startCursor },
    });
  };

  return (
    <ContainerStyled
      onLayout={onLayout}
      style={{ justifyContent: isLoading || error ? 'center' : 'flex-start' }}
      screenWidth={width}>
      {isLoading || error ? (
        <LoaderErrorView error={error} style={{ flex: 1 }} />
      ) : (
        <View>
          <RepoFilter languages={languages} filteredRepoCount={result.length} repoBtnText="New" />
          <ScrollView horizontal scrollEnabled={false} contentContainerStyle={{ flexGrow: 1 }}>
            <FlatList
              data={result}
              scrollEnabled={Platform.OS === 'web'}
              keyExtractor={(item, index) => item.id + index}
              renderItem={({ item }) => <RepoCard repo={item} isProfilePage />}
              ListFooterComponent={
                result.length > 0 && (
                  <Pagination
                    goToNext={goToNext}
                    goToPrev={goToPrev}
                    hasNextPage={pageInfo?.hasNextPage}
                    hasPrevPage={pageInfo?.hasPreviousPage}
                  />
                )
              }
            />
          </ScrollView>
        </View>
      )}
    </ContainerStyled>
  );
};

export default Repositories;
