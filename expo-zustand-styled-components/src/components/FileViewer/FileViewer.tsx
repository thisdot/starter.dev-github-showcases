import { useEffect } from 'react';
import { Text } from 'react-native';

import { useRepoInfoStore } from '../../hooks/stores';
import getRepoFile from '../../services/get-repo-file';

import { mapExtensionToLanguage } from './mapExtensionToLanguage';
import { fontFamily } from './font';

import FIleCode from './FIleCode';
import FileText from './FileText';

import { ByteSize, Containter, Header, LineCount } from './FileViewer.styles';

const FileViewer = () => {
  const { path, owner, name, file, branch } = useRepoInfoStore();

  useEffect(() => {
    getRepoFile({
      owner,
      name,
      expression: `${branch}:${path || ''}`,
    });
  }, [owner, name, branch, path]);

  const extension = path.split('.').pop();
  const language = mapExtensionToLanguage(extension);

  return (
    <Containter>
      <Header>
        <LineCount style={{ fontFamily }}>{file?.text?.split('\n')?.length || 0} lines</LineCount>
        <ByteSize>
          <Text style={{ fontFamily }}>{file?.byteSize || 0} Bytes</Text>
        </ByteSize>
      </Header>

      {language ? (
        <FIleCode text={file?.text || ''} language={language} />
      ) : (
        <FileText text={file?.text} />
      )}
    </Containter>
  );
};

export default FileViewer;
