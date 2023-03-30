import { useEffect, useLayoutEffect } from 'react';
import { useWindowDimensions } from 'react-native';

import { AppStackScreenProps } from '../../../types';

import getOrgRepos from '../../services/get-org-repos';
import { useOrgStore } from '../../hooks/stores';
import { tabs } from '../../utils/constants';

import { ContainerStyled, SafeAreaViewStyled } from './Organization.styles';

import LoaderErrorView from '../../components/LoaderErrorView';
import { About, Repositories } from '../../components/Organization';
import TabNavigation from '../../components/TabNavigation';

const Organization = ({ route, navigation }: AppStackScreenProps<'Organization'>) => {
  const { width } = useWindowDimensions();
  const { data, error, isLoading } = useOrgStore();
  const { login, afterCursor, beforeCursor } = route.params;

  useEffect(() => {
    if (login) {
      getOrgRepos({
        first: 10,
        organization: login,
        afterCursor: afterCursor,
        beforeCursor: beforeCursor,
        orderBy: { direction: 'DESC', field: 'UPDATED_AT' },
      });
    } else {
      navigation.goBack();
    }
  }, [route.params]);

  useLayoutEffect(() => {
    navigation.setOptions({ title: `Organization . ${data.orgInfo.name}` });
  }, [navigation, data]);

  const goToNext = () => {
    navigation.navigate('Organization', {
      login,
      afterCursor: data.pageInfo.endCursor,
    });
  };

  const goToPrev = () => {
    navigation.navigate('Organization', {
      login,
      beforeCursor: data.pageInfo.startCursor,
    });
  };

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !data ? (
        <LoaderErrorView error={error} style={{ flex: 1, height: '100%' }} />
      ) : (
        <ContainerStyled screenWidth={width}>
          <About {...data.orgInfo} />
          <TabNavigation pl={16} tabs={tabs} activeTab={tabs[0].title} />
          <Repositories
            repos={data.repos}
            goToNext={goToNext}
            goToPrev={goToPrev}
            hasNextPage={data.pageInfo.hasNextPage}
            hasPrevPage={data.pageInfo.hasPreviousPage}
          />
        </ContainerStyled>
      )}
    </SafeAreaViewStyled>
  );
};

export default Organization;
