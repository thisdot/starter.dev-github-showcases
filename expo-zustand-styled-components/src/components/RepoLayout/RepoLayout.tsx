import { Platform, ScrollView, useWindowDimensions } from 'react-native';

import LoaderErrorView from '../../components/LoaderErrorView';
import BranchNavigation from '../../components/BranchNavigation';

import { useRepoInfoStore } from '../../hooks/stores';

import { MainContent, Containter, SafeAreaViewStyled } from './RepoLayout.styles';

const RepoLayout = ({
  children,
  ...rest
}: {
  path?: string;
  branch?: string;
  children: React.ReactNode;
}) => {
  const { width } = useWindowDimensions();
  const { info, error, isLoading } = useRepoInfoStore();

  const isWeb = Platform.OS === 'web';

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !info ? (
        <LoaderErrorView error={error} />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: isWeb ? 40 : 10 }}>
          <Containter screenWidth={width}>
            <BranchNavigation {...rest} />
            <MainContent
              screenWidth={width}
              style={{ flexBasis: isWeb ? 'fit-content' : undefined }}>
              {children}
            </MainContent>
          </Containter>
        </ScrollView>
      )}
    </SafeAreaViewStyled>
  );
};

export default RepoLayout;
