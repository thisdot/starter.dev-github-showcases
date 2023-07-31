import { useWindowDimensions } from 'react-native';

import { RepoStackScreenProps } from '../../../../types';

import FileViewer from '../../../components/FileViewer';
import RepoLayout from '../../../components/RepoLayout';

import { Containter } from '../Repository.styles';

const Blob = ({ route }: RepoStackScreenProps<'Blob'>) => {
  const { width } = useWindowDimensions();

  return (
    <RepoLayout {...route.params}>
      <Containter screenWidth={width}>
        <FileViewer {...route.params} />
      </Containter>
    </RepoLayout>
  );
};

export default Blob;
