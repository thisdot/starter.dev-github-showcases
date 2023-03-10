import { useEffect, useLayoutEffect } from 'react';
import { Text, useWindowDimensions } from 'react-native';

import { AppStackScreenProps } from '../../../types';

import getOrgRepos from '../../services/get-org-repos';
import { useOrgStore } from '../../hooks/stores';

import { ContainerStyled, TabNavContainer, SafeAreaViewStyled } from './Organization.styles';

import LoaderErrorView from '../../components/LoaderErrorView';
import { About, Repositories } from '../../components/Organization';

const Organization = ({ route, navigation }: AppStackScreenProps<'Organization'>) => {
  const { width } = useWindowDimensions();
  const { data, error, isLoading, afterCursor, beforeCursor } = useOrgStore();

  useEffect(() => {
    if (route.params?.login) {
      getOrgRepos({
        first: 10,
        afterCursor,
        beforeCursor,
        organization: route.params.login,
        orderBy: { direction: 'DESC', field: 'UPDATED_AT' },
      });
    } else {
      navigation.goBack();
    }
  }, [route.params, afterCursor, beforeCursor]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Organization . ${data.orgInfo.name}` });
  }, [navigation, data]);

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !data ? (
        <LoaderErrorView error={error} style={{ flex: 1, height: '100%' }} />
      ) : (
        <ContainerStyled screenWidth={width}>
          <About {...data.orgInfo} />
          <TabNavContainer>
            <Text>Tab Navigation</Text>
          </TabNavContainer>
          <Repositories repos={data.repos} />
        </ContainerStyled>
      )}
    </SafeAreaViewStyled>
  );
};

export default Organization;
