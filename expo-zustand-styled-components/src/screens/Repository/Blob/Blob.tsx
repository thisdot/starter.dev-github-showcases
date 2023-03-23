import { ScrollView, useWindowDimensions } from 'react-native';

import FileTree from '../../../components/FileTree';
import LoaderErrorView from '../../../components/LoaderErrorView';
import { BranchNavigation } from '../../../components/Repository';

import { useRepoInfoStore } from '../../../hooks/stores';

import { Containter, MainContent, ContainerStyled, SafeAreaViewStyled } from './Blob.styles';

const Blob = () => {
  const { width } = useWindowDimensions();
  const { info, name, owner, error, branch, isLoading } = useRepoInfoStore();

  return (
    <SafeAreaViewStyled>
      {isLoading || error || !info ? (
        <LoaderErrorView error={error} />
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <ContainerStyled screenWidth={width}>
            <BranchNavigation branch={branch} name={name} owner={owner} />
            <MainContent screenWidth={width}>
              <Containter screenWidth={width}>
                <FileTree />
              </Containter>
            </MainContent>
          </ContainerStyled>
        </ScrollView>
      )}
    </SafeAreaViewStyled>
  );
};

export default Blob;
