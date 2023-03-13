import { useEffect } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import {
  ReposContainer,
  ContainerStyled,
  ContentViewStyled,
  PaginationContainer,
} from './Repositories.styles';

import getUserRepos from '../../../services/get-user-repos';
import { useUserReposStore, useRepoFilterStore } from '../../../hooks/stores';

import LoaderErrorView from '../../LoaderErrorView';
import RepoCard from '../../RepoCard';
import RepoFilter from '../../RepoFilter';
import useRepoSortFilter from '../../../utils/useRepoSortFiler';

const Repositories = ({ username }: { username: string }) => {
  const { width } = useWindowDimensions();

  const { error, userRepos, isLoading } = useUserReposStore();

  const { search, filterType } = useRepoFilterStore();

  const { result } = useRepoSortFilter(userRepos, search, filterType)


  useEffect(() => {
    getUserRepos({
      username,
      // afterCursor: location.query?.after,
      // beforeCursor: location.query?.before,
      orderBy: {
        direction: 'DESC',
        field: 'UPDATED_AT',
      },
      first: 10,
    });
  }, [username]);

  useEffect(() => {
    useRepoSortFilter(userRepos, search, filterType)
  }, [search, userRepos, filterType]);



  return (
    <ContainerStyled
      style={{ justifyContent: isLoading || error ? 'center' : 'flex-start' }}
      screenWidth={width}>
      <RepoFilter languages={[]} filteredRepoCount={result.length} repoBtnText="New" />
      {isLoading || error ? (
        <LoaderErrorView error={error} />
      ) : (
        <ContentViewStyled>
          <ReposContainer>
            {/* using map() to render the list of repos, because flatlist is not working properly 
            with scrollview and this screen requires scrollview also the data is not so huge 
            to consider using flatlist */}
            {result.map((item, index) => (
              <RepoCard key={item.id + index} repo={item} isProfilePage />
            ))}
            <PaginationContainer>
              <Text>Pagination</Text>
            </PaginationContainer>
          </ReposContainer>
        </ContentViewStyled>
      )}
    </ContainerStyled>
  );
};

export default Repositories;
