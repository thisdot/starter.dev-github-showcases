import { useEffect } from 'react';
import { useWindowDimensions } from 'react-native';

import FileTree from '../../../components/FileTree';
import RepoAbout from '../../../components/RepoAbout';
import RepoLayout from '../../../components/RepoLayout';
import RepoReadme from '../../../components/RepoReadme';
import { useRepoInfoStore } from '../../../hooks/stores';

import { Containter } from '../Repository.styles';

const Code = () => {
  const { width } = useWindowDimensions();

  useEffect(() => {
    useRepoInfoStore.setState({ activeTab: 'Code' });
  }, []);

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
