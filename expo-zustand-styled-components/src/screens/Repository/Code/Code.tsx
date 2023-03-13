import React, { useEffect } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import { RepoStackScreenProps } from '../../../../types';
import LoaderErrorView from '../../../components/LoaderErrorView';

import { BranchNavigation } from '../../../components/Repository';
import { useRepoInfoStore } from '../../../hooks/stores';
import getRepoInfo from '../../../services/get-repo-info';

import { MainContent, ContainerStyled, SafeAreaViewStyled } from './Code.styles';

const Code = ({ route, navigation }: RepoStackScreenProps<'Code'>) => {
  const { width } = useWindowDimensions();
  const { info, error, branch, isLoading } = useRepoInfoStore();

  useEffect(() => {
    getRepoInfo({
      name: route.params?.name,
      owner: route.params?.owner,
    });
  }, [route.params]);

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !info ? (
        <LoaderErrorView error={error} />
      ) : (
        <ContainerStyled screenWidth={width} contentContainerStyle={{ flexGrow: 1, flexShrink: 1 }}>
          <BranchNavigation branch={branch} name={route.params?.name} owner={route.params?.owner} />
          <MainContent screenWidth={width}>
            <Text>Right Content</Text>
          </MainContent>
        </ContainerStyled>
      )}
    </SafeAreaViewStyled>
  );
};

export default Code;
