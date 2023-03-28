import { useEffect } from 'react';
import { FlatList, useWindowDimensions } from 'react-native';

import { ContainerStyled, ContentViewStyled } from './Repositories.styles';

import getUserRepos from '../../../services/get-user-repos';
import { useUserReposStore, useRepoFilterStore } from '../../../hooks/stores';

import LoaderErrorView from '../../LoaderErrorView';
import RepoCard from '../../RepoCard';
import RepoFilter from '../../RepoFilter';
import useRepoSortFilter from '../../../utils/useRepoSortFiler';
import Pagination from '../../Pagination';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native';

const Repositories = ({
  username,
  afterCursor,
  beforeCursor,
}: {
  username: string;
  afterCursor?: string;
  beforeCursor?: string;
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

  const goToNext = () => {
    navigate('AppNavigator', {
      screen: 'Profile',
      params: { username, afterCursor: pageInfo.endCursor },
    });
  };

  const goToPrev = () => {
    navigate('AppNavigator', {
      screen: 'Profile',
      params: { username, beforeCursor: pageInfo.startCursor },
    });
  };

  return (
    <ContainerStyled
      style={{ justifyContent: isLoading || error ? 'center' : 'flex-start' }}
      screenWidth={width}>
      {isLoading || error ? (
        <LoaderErrorView error={error} />
      ) : (
        <>
          <RepoFilter languages={languages} filteredRepoCount={result.length} repoBtnText="New" />
          <ContentViewStyled>
            <ScrollView
              horizontal
              scrollEnabled={false}
              contentContainerStyle={{ flexGrow: 1 }}>
              <FlatList
                data={result}
                scrollEnabled={false}
                keyExtractor={(item, index) => item.id + index}
                renderItem={({ item }) => <RepoCard repo={item} isProfilePage />}
                ListFooterComponent={
                  <Pagination
                    goToNext={goToNext}
                    goToPrev={goToPrev}
                    hasNextPage={pageInfo.hasNextPage}
                    hasPrevPage={pageInfo.hasPreviousPage}
                  />
                }
              />
            </ScrollView>
          </ContentViewStyled>
        </>
      )}
    </ContainerStyled>
  );
};

export default Repositories;
