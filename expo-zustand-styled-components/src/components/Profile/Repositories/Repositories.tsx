import { useEffect } from 'react';
import { View, Text } from 'react-native';

import { ContainerStyled, ContentViewStyled, ProfileRepoViewStyled } from './Repositories.styles';

import getUserRepos from '../../../services/get-user-repos';
import { useAppStore } from '../../../hooks/stores';

import LoaderErrorView from '../../LoaderErrorView';
import RepoCard from '../../RepoCard';

const Repositories = ({ username }: { username: string }) => {
  const { error, userRepos, isLoading } = useAppStore();

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

  return (
    <ContainerStyled style={{ justifyContent: isLoading || error ? 'center' : 'flex-start' }}>
      {isLoading || error ? (
        <LoaderErrorView error={error} />
      ) : (
        <ContentViewStyled>
          <View>
            <Text>Search & Filter Dropdown Buttons</Text>
          </View>
          <View style={{ flex: 1 }}>
            <ProfileRepoViewStyled>
              {/* TODO: using map() to render the list of repos, because flatlist is not working properly 
                    with scrollview and this screen requires scrollview */}
              {userRepos.map((item, index) => (
                <RepoCard key={item.id + index} repo={item} isProfilePage />
              ))}
            </ProfileRepoViewStyled>
            <View style={{ flex: 1 }}>
              <Text>Pagination</Text>
            </View>
          </View>
        </ContentViewStyled>
      )}
    </ContainerStyled>
  );
};

export default Repositories;
