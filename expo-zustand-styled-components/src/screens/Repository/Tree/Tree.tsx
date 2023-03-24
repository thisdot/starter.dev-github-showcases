import { useWindowDimensions } from 'react-native';

import FileTree from '../../../components/FileTree';
import RepoLayout from '../../../components/RepoLayout';

import { RepoStackScreenProps } from '../../../../types';

import { Containter } from '../Repository.styles';

const Tree = ({ route }: RepoStackScreenProps<'Tree'>) => {
  const { width } = useWindowDimensions();

  return (
    <RepoLayout {...route.params}>
      <Containter screenWidth={width}>
        <FileTree {...route.params}/>
      </Containter>
    </RepoLayout>
  );
};

export default Tree;
