import FileViewerView from './FileViewer.view';
import { mapExtensionToLanguage } from './mapExtensionToLanguage';
import { useRepo } from '~/context/RepoContext';

export type Blob = {
  __typename?: 'Blob';
  abbreviatedOid: string;
  byteSize: number;
  commitResourcePath: any;
  commitUrl: any;
  id: string;
  isBinary?: boolean;
  isTruncated: boolean;
  oid: any;
  repository: any;
  text?: string;
};

function FileViewer({ data }: any ) {
  const { path } = useRepo();


  const file = data?.repository?.blob as Blob | undefined;

  if (!file) {
    const err = new Error('Repository path not found');
    throw err;
  }

  const extension = path.split('.').pop();
  const language = mapExtensionToLanguage(extension);
  const text = file.text ? file.text : '';
  const lines = text.split('\n').length;

  return (
    <FileViewerView
      text={text}
      byteSize={file.byteSize}
      lines={lines}
      language={language}
    />
  );
}

export default FileViewer;
