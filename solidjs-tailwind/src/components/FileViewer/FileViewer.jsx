import { createResource } from 'solid-js';
import { useParams } from '@solidjs/router';
import styles from './FileViewer.module.css';
import { useRepo } from '../../contexts/RepoContext';
import getRepoFile from '../../services/get-repo-file';
import FileCode from './FileCode';
import FileText from './FileText';
import { mapExtensionToLanguage } from './mapExtensionToLanguage';

const FileViewer = () => {
  const { info } = useRepo();
  const params = useParams();

  const branch = params.branch || info().branch;
  const path = params.path;

  const [resBlob] = createResource(`${branch}_${params.path}`, () =>
    getRepoFile({
      owner: params.owner,
      name: params.name,
      expression: `${branch}:${params.path || ''}`,
    })
  );

  const extension = path.split('.').pop();
  const language = mapExtensionToLanguage(extension);

  return (
    <>
      {resBlob.loading ? (
        <div>Loading...</div>
      ) : (
        <div class={styles.container}>
          <div class={styles.fileHeader}>
            <span
              data-testid="file viewer line count"
              class={styles.fileHeaderLines}
            >
              {resBlob().text?.split('\n').length} lines
            </span>
            <span
              data-testid="file viewer byte size"
              class={styles.fileHeaderBytes}
            >
              {resBlob().byteSize} Bytes
            </span>
          </div>
          {language ? (
            <FileCode text={resBlob().text} language={language} />
          ) : (
            <FileText text={resBlob().text} />
          )}
        </div>
      )}
    </>
  );
};

export default FileViewer;
