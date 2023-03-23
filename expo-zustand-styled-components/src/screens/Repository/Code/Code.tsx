import { ScrollView, useWindowDimensions } from 'react-native';

import FileTree from '../../../components/FileTree';
import RepoAbout from '../../../components/RepoAbout';
import LoaderErrorView from '../../../components/LoaderErrorView';
import BranchNavigation from '../../../components/BranchNavigation';
import RepoReadme from '../../../components/RepoReadme/RepoReadme';

import { useRepoInfoStore } from '../../../hooks/stores';

import { Containter, MainContent, ContainerStyled, SafeAreaViewStyled } from './Code.styles';

const Code = () => {
  const { width } = useWindowDimensions();
  const { path, info, error, isLoading } = useRepoInfoStore();

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !info ? (
        <LoaderErrorView error={error} />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ContainerStyled screenWidth={width}>
            <BranchNavigation />
            <MainContent screenWidth={width}>
              <Containter screenWidth={width}>
                <FileTree />
                {!path ? <RepoReadme /> : null}
              </Containter>
              {!path ? (
                <RepoAbout
                  topics={info?.topics}
                  description={info?.description}
                  homepageUrl={info?.homepageUrl}
                />
              ) : null}
            </MainContent>
          </ContainerStyled>
        </ScrollView>
      )}
    </SafeAreaViewStyled>
  );
};

export default Code;
