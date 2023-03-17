import { ScrollView, useWindowDimensions } from 'react-native';

import FileTree from '../../../components/FileTree';
import RepoAbout from '../../../components/RepoAbout';
import LoaderErrorView from '../../../components/LoaderErrorView';
import { BranchNavigation } from '../../../components/Repository';
import RepoReadme from '../../../components/RepoReadme/RepoReadme';

import { useRepoInfoStore } from '../../../hooks/stores';

import { Containter, MainContent, ContainerStyled, SafeAreaViewStyled } from './Code.styles';

const Code = () => {
  const { width } = useWindowDimensions();
  const { info, name, owner, error, branch, isLoading } = useRepoInfoStore();
  
  return (
    <SafeAreaViewStyled>
      {isLoading || error || !info ? (
        <LoaderErrorView error={error} />
      ) : (
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <ContainerStyled screenWidth={width}>
            <BranchNavigation branch={branch} name={name} owner={owner} />
            <MainContent screenWidth={width}>
              <Containter screenWidth={width}>
                <FileTree />
                <RepoReadme />
              </Containter>
              <RepoAbout
                description={info?.description}
                homepageUrl={info?.homepageUrl}
                topics={info?.topics}
              />
            </MainContent>
          </ContainerStyled>
        </ScrollView>

      )}
    </SafeAreaViewStyled>
  );
};

export default Code;
