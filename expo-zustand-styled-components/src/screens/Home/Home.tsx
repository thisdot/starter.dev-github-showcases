import React, { useEffect } from 'react';
import { FlatList, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import {
  GistsListContainerStyled,
  GistsStyled,
  RepositoriesStyled,
  SafeAreaViewStyled,
  TitleStyled,
  RepositoriesListContainerStyled,
  ContainerStyled,
} from './Home.styles';
import { AppStackScreenProps } from '../../../types';

import getGists from '../../services/get-gists';
import getTopRepos from '../../services/get-top-repos';

import { useGistsStore } from '../../hooks/stores/useGistsStore';
import { useTopReposStore } from '../../hooks/stores/useTopReposStore';
import RepoCard from '../../components/RepoCard';
import Header from '../../components/Header';

const Home = ({ navigation }: AppStackScreenProps<'Home'>) => {
  const { width } = useWindowDimensions();
  const gists = useGistsStore((state) => state.gists);
  const topRepos = useTopReposStore((state) => state.topRepos);

  useEffect(() => {
    getGists();
    getTopRepos();
  }, []);
  return (
    <SafeAreaViewStyled>
      <Header />
      <ContainerStyled screenWidth={width}>
        <GistsStyled screenWidth={width}>
          <GistsListContainerStyled>
            <TitleStyled>Gists</TitleStyled>
            <FlatList
              data={gists}
              renderItem={({ item }) => (
                <TouchableOpacity>
                  <Text>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
          </GistsListContainerStyled>
        </GistsStyled>
        <RepositoriesStyled screenWidth={width}>
          <TitleStyled>Top Repositories</TitleStyled>
          <RepositoriesListContainerStyled>
            <FlatList
              data={topRepos}
              renderItem={({ item }) => (
                <RepoCard
                  full_name={item.name}
                  visibility={item.visibility}
                  description={item.description}
                  forks_count={item.forkCount}
                  stargazers_count={item.stargazerCount}
                  language={item.primaryLanguage?.name}
                  updated_at={item.updatedAt}
                  star={true}
                />
              )}
            />
          </RepositoriesListContainerStyled>
        </RepositoriesStyled>
      </ContainerStyled>
    </SafeAreaViewStyled>
  );
};

export default Home;
