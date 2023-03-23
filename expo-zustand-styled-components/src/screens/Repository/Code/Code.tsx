import { Platform, ScrollView, useWindowDimensions } from 'react-native';

import FileTree from '../../../components/FileTree';
import RepoAbout from '../../../components/RepoAbout';
import FileViewer from '../../../components/FileViewer';
import LoaderErrorView from '../../../components/LoaderErrorView';
import RepoReadme from '../../../components/RepoReadme/RepoReadme';
import BranchNavigation from '../../../components/BranchNavigation';

import { useRepoInfoStore } from '../../../hooks/stores';

import { Containter, MainContent, ContainerStyled, SafeAreaViewStyled } from './Code.styles';

const Code = () => {
  const { width } = useWindowDimensions();
  const { path, info, isBlob, error, isLoading } = useRepoInfoStore();

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !info ? (
        <LoaderErrorView error={error} />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ContainerStyled screenWidth={width}>
            <BranchNavigation />
            <MainContent
              screenWidth={width}
              style={{ flexBasis: Platform.OS === 'web' ? 'fit-content' : undefined }}>
              <Containter screenWidth={width}>
                {isBlob ? <FileViewer /> : <FileTree />}
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
