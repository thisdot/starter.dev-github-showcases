import { useWindowDimensions } from 'react-native';

import FileTree from '../../../components/FileTree';
import RepoAbout from '../../../components/RepoAbout';
import RepoLayout from '../../../components/RepoLayout';
import RepoReadme from '../../../components/RepoReadme';

import { Containter } from '../Repository.styles';

const Code = () => {
  const { width } = useWindowDimensions();

  return (
    <RepoLayout>
      <Containter screenWidth={width}>
        <FileTree />
        <RepoReadme />
      </Containter>
      <RepoAbout />
    </RepoLayout>
  );
};

export default Code;
