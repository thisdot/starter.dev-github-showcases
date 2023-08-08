import { openURL } from 'expo-linking';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, useWindowDimensions, ScrollView } from 'react-native';
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
import LinkButton from '../../components/LinkButton/LinkButton';

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
      <ScrollView>
        <ContainerStyled screenWidth={width}>
          <GistsStyled screenWidth={width}>
            <GistsListContainerStyled>
              <TitleStyled>Gists</TitleStyled>
              {gistsIsLoading || gistsError ? (
                <LoaderErrorView error={gistsError} />
              ) : (gists.map((item) => <TouchableOpacity key={item.url} onPress={() => openURL(item.url)}>
                     <Text>{item.name}</Text>
                  </TouchableOpacity>)
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
                {topRepos.map((item) => <RepoCard repo={item} key={item.id}/>)}
                  <ViewAllReposButtonStyled>
                    <LinkButton to={`/${topRepos[0].owner.login}`}>
                      <Text>View all repositories</Text>
                    </LinkButton>
                  </ViewAllReposButtonStyled>
                </>
              )}
            </RepositoriesListContainerStyled>
          </RepositoriesStyled>
        </ContainerStyled>
      </ScrollView>
    </SafeAreaViewStyled>
  );
};

export default Home;
