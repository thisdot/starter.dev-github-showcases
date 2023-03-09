import { openURL } from 'expo-linking';
import React, { useEffect } from 'react';
import { Text, FlatList, TouchableOpacity, useWindowDimensions } from 'react-native';
import {
  GistsStyled,
  TitleStyled,
  ContainerStyled,
  RepositoriesStyled,
  SafeAreaViewStyled,
  GistsListContainerStyled,
  ViewAllReposButtonStyled,
  RepositoriesListContainerStyled,
} from './Home.styles';

import getGists from '../../services/get-gists';
import getTopRepos from '../../services/get-top-repos';

import { useGistsStore, useTopReposStore } from '../../hooks/stores';

import RepoCard from '../../components/RepoCard';
import LoaderErrorView from '../../components/LoaderErrorView';

const Home = () => {
  const { width } = useWindowDimensions();
  const gists = useGistsStore((state) => state.gists);
  const gistsError = useGistsStore((state) => state.error);
  const gistsIsLoading = useGistsStore((state) => state.isLoading);
  const topRepos = useTopReposStore((state) => state.topRepos);
  const topReposError = useTopReposStore((state) => state.error);
  const topReposIsLoading = useTopReposStore((state) => state.isLoading);

  useEffect(() => {
    getGists();
    getTopRepos();
  }, []);

  return (
    <SafeAreaViewStyled>
      <ContainerStyled screenWidth={width}>
        <GistsStyled screenWidth={width}>
          <GistsListContainerStyled>
            <TitleStyled>Gists</TitleStyled>
            {gistsIsLoading || gistsError ? (
              <LoaderErrorView error={gistsError} />
            ) : (
              <FlatList
                data={gists}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => openURL(item.url)}>
                    <Text>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            )}
          </GistsListContainerStyled>
        </GistsStyled>
        <RepositoriesStyled screenWidth={width}>
          <TitleStyled>Top Repositories</TitleStyled>
          <RepositoriesListContainerStyled>
            {topReposIsLoading || topReposError ? (
              <LoaderErrorView error={topReposError} />
            ) : (
              <>
                <FlatList data={topRepos} renderItem={({ item }) => <RepoCard repo={item} />} />
                <ViewAllReposButtonStyled>
                  <Text>View all repositories</Text>
                </ViewAllReposButtonStyled>
              </>
            )}
          </RepositoriesListContainerStyled>
        </RepositoriesStyled>
      </ContainerStyled>
    </SafeAreaViewStyled>
  );
};

export default Home;
